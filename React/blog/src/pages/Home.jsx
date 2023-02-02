import Card from '../components/Card';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Home() {
  const articles =
  [
    {
      image: 'https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg',
      title: 'Avocado roll',
      
    },
    {
      image: 'https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x500.jpg',
      title: 'Dragon roll',
    },
    {
      image: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/10/Dragon-Roll38797s_1400-720x720.jpg',
      title: 'Rainbow roll',
    },
    {
      image: 'https://static-content.owner.com/menu-items/items/7ClKHvFdnGgR.png?v=1846667053',
      title: 'Baked lobster',
    },

  ];

  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-3 col-sm-6 col-12 py-2" key={index}>
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}