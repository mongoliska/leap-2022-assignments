import { useEffect } from 'react';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';

export default function Header() {
  const count = 10;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://demo-api-one.vercel.app/api/categories')
      .then((res) => {
        setCategories(res.data.body);
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
                <a href="/">Home</a>
              </li>
              {categories.map((item) => (
                <li key={item.id}>
                  <a href="/">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
