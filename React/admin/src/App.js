import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Title from './components/Title/Title';
import Table from './components/Table/Table';
import Select from 'react-select';


function App() {
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
      <Title/>
      <Table/>
      </div>
    </>
  );
}

export default App;
