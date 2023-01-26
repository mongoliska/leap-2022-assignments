import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CategoryCreate({ afterSubmit }) {
  const [name, setName] = useState('');
  // const navigate = useNavigate();

  const submit = () => {
    axios 
    .post('http://localhost:8000/categories', {name})
    .then((res) => {
      toast.success('Amjilttai nemegdlee');
      afterSubmit(res.data);
    })
      .catch((err) => {
        console.log(err);
        toast.error('aldaa garlaa');
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name of the category..." />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
