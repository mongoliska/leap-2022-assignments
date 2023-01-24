import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [articles, setArticles] = useState ([]); 
  useEffect(() => {
    axios.get('https://demo-api-one.vercel.app/api/articles').then((res) => {
      setArticles(res.data.body);
    });
  }, []);


  // [
  //   {
  //     image: 'https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg',
  //     title: 'Avocado roll',
      
  //   },
  //   {
  //     image: 'https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x500.jpg',
  //     title: 'Dragon roll',
  //   },
  //   {
  //     image: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/10/Dragon-Roll38797s_1400-720x720.jpg',
  //     title: 'Rainbow roll',
  //   },
  //   {
  //     image: 'https://static-content.owner.com/menu-items/items/7ClKHvFdnGgR.png?v=1846667053',
  //     title: 'Baked lobster',
  //   },
  //   {
  //     image: 'https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg',
  //     title: 'Avocado roll',
      
  //   },
  //   {
  //     image: 'https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x500.jpg',
  //     title: 'Dragon roll',
  //   },
  //   {
  //     image: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/10/Dragon-Roll38797s_1400-720x720.jpg',
  //     title: 'Rainbow roll',
  //   },
  //   {
  //     image: 'https://static-content.owner.com/menu-items/items/7ClKHvFdnGgR.png?v=1846667053',
  //     title: 'Baked lobster',
  //   }
  // ];


  return (
    <main>
      <div className="container">
        <div className="row gy-4">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12 py-2" key={article.id}>
              <Link to={`/articles/${article.id}`}>
              <Card title={article.name} image={article.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}