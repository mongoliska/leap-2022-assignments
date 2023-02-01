import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Article () {
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    console.log(id);
console.log(id)
    useEffect(() => {
        axios.get(`https://localhost:8000/article/${id}`).then((res) => {
            setArticle(res.data);
        })
    }, []);
    
    if (article === null) return <></>;
    return (
        <div className="container">
            <h1>{article.name}</h1>
            <img style={{maxWidth: '100%'}} src={article.imageUrl} alt="" />
            <div>{article.text}</div>
        </div>
    );
}