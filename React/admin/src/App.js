import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Title from './components/Title/Title';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-sm body-container">
          <Title/>
          <Table/>
      </div>
    </>
  );
}

export default App;
