import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Signin from './pages/Signin'
import SignInError from './pages/SignInError';
import Register from './pages/Register';


function App() {

  const [signedIn, setSignedIn]=useState(false);

  const [show, setShow] = useState(false);
  
  const [count, setCount] = useState(0);
  const [menuShow,setMenuShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  if(!signedIn) {
    return (
      <>
      <Routes>
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='*' element={<SignInError />} /> 
      </Routes>
      </>
    )
  }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)}/>

      <div className='main-wrapper'>
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}></div>
        <div className='off-menu-sibling'>
      <Routes>
        <Route path ="/"element={<Home />}/>
        <Route path ="/articles" element={<Articles handleShow={handleShow} handleSave={handleSave} handleClose={handleClose} show={show} />}/>
      </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
