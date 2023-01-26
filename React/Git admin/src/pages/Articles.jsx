import PostList from '../components/Blogs/PostList';
import Heading from '../components/Heading';
import DynamicModal from '../../src/components/utils/DynamicModal';
import PostCreate from '../../src/components/Blogs/PostCreate';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import PostEdit from '../components/Blogs/PostEdit';

export default function Articles() {
  const [modalShow, setModalShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const [modalContent, setModalContent] = useState();



  useEffect(() => {
    fetch('https://demo-api-one.vercel.app/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error('aldaa garlaa')
      });
  }, [])

  const afterSubmit = (article) => {
    modalClose();
    setArticles([...articles, article]);
  };
  const modalClose = () => {
    setModalShow(false);
  };
  const showCreateModal = () => {
    setModalContent(<PostCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (article) => {
    modalClose();
    const newArticles = [...articles];
    newArticles.map((art) => {
      if (art.id === article.id) {
        return article;
      }
      return art;
    });
    setArticles(newArticles);
  };

  const showEditModal = (article) => {
    setModalContent(<PostEdit article={article} afterEdit={afterEdit} />);
    setModalShow(true);
  };
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={showCreateModal} />
        <PostList items={articles} onEdit={showEditModal} />
      </div>
      <DynamicModal show={modalShow} handleClose={modalClose} title="Create post" content={modalContent} />
    </>
  );
}
