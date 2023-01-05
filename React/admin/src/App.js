import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Title from './components/Title/Title';
import Table from './components/Table/Table';
import Select from 'react-select';
import DynamicModal from './components/Utils/DynamicModal';
import { useState } from 'react';
import PostCreate from './components/Blogs/PostCreate';



function App() {

  const [show, setShow] = useState(false);
  
  const [count, setCount] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  return (
    <>
      <Navbar />
      <div className="container-sm body-container">
      <Select
        value={[]}
        options={options}/>
      <Title title={'k'} handleShow={handleShow} />
      <DynamicModal 
        show={show} 
        handleClose={handleClose} 
        handleSave={handleSave} 
        title="Create post"
        content={<PostCreate />}/>
      <Table/>
      </div>
    </>
  );
}

export default App;
