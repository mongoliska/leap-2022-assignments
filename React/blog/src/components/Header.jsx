import { useEffect } from 'react';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Header() {
  const count = 10;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then((res) => {
        setCategories(res.data);
      });
      
        
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                Sushi Hana
              </a>
            </div>
            <div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Нүүр</Link>
              </li>
              <li>

              </li>
                {categories.map((item) => {
                  if(item.name === 'Products'){
                    return (
                      <Link to={'/products'}>
                        <li key={item.id}>
                          <a >{item.name}</a>
                        </li>
                      </Link>
                    );
                  }else{
                    return (
                      <Link to="">
                        <li key={item.id}>
                        <a >{item.name}</a>
                        </li>
                      </Link>
                    )
                  }
                })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
