import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import currencyFormatter from '../utils/currencyFormatter'

import relateTime from 'dayjs/plugin/relativeTime';
import { Link, useLocation } from 'react-router-dom';
dayjs.extend(relateTime);

export default function Products () {
    const [page, setPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    const location = useLocation();

    useEffect(() => {
        axios.get(`http:localhost:8000/products?pageSize=${pageSize}&page=${currentPage}`).then((res) => {
            setPage(res.data);
        });
    }, [currentPage, pageSize]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if(searchParams.has('page')) {
            setCurrentPage(Number(searchParams.get('page')));
        }
        if(searchParams.has('page')) {
            setPageSize(Number(searchParams.get('pageSize')));
        }
    }, [location]);

    if (!page) {
        return (
            <div className="spinner-frow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    const getPaginations = () => {
        let result = [];
        for (let i = 1; i <= page.totalPages; i++) {
            result.push(
                <li className={`page-item ${1 === page.page && 'active'}`}>
                <a className="page-link" href="#">
                1
                </a>
                </li>
            );
            //front trible dots
            if(page.page - 3 > 0) {
                result.push(
                    <li className={`page-item`}>
                        <span className='page-link'>...</span>
                    </li>
                );
            }

            //adding current page
            if (page.page !== 1 && page.page !== page.totalPages) {
                result.push(
                    <li className='{`page-item active`}'>
                        <a href="#" className='page-link'>
                            {page.page}
                        </a>
                    </li>
                );
            }

            //back trible dots
            if (page.totalPages - 3 >= page.page) {
                result.push(
                    <li className={`page-item`}>
                        <span className='page-link'>...</span>
                    </li>
                );
            }
        
            //last page adding
            result.push(
                <li className={`page-item ${page.totalPages === page.page && 'active'}`}>
                    <a className='page-link' href="#">
                        {page.totalPages}
                    </a>
                </li>
            );
        }
        return result;
    };

    return (
        <main>
            <div className="container">
                <div className="row gy-4">
                    {page.items.map((product) => {
                        return (
                            <div className="col-sm-3" key={product.id}>
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <img src={product.imageUrl} alt={product.name} />
                                    </div>
                                    <div className="product-card-desc">
                                        <div className="product-card-date">{dayjs(Number(product.createdAt) * 1000).fromNow()}</div>
                                        <div className="product-card-name">{product.name}</div>
                                        <div className="product-card-price">{currencyFormatter(product.price)}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <nav aria-label="..." className="my-4">
                        <ul>
                            <li className={`page-item ${page.page === 1 && 'disabled'}`}>
                                <a href="#" className="page-link">
                                    Previous
                                </a>
                            </li>
                            {getPaginations()}
                            <li>
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    );
}
