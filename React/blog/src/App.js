import Header from './components/Header';
import ChatScreen from './pages/ChatScreen';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
      </Routes>
      {/* <Home /> */}
      {/* <ChatScreen /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
