import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Category() {
  const [category, setCategory] = useState ([]); 
  const {id } = useParams()
  console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:8000/categories/${id}`).then((res) => {

        setCategory(res.data);

    });
  }, []);

console.log(category)

  return (
    <main>
      <div className="container">
        <div className="row gy-4">
          {category.map((categories) => (
            <div className="col-md-3 col-sm-6 col-12 py-2" key={categories.id}>
              <Link to={`/article/${categories.id}`}>
              <Card title={categories.name} image={categories.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}