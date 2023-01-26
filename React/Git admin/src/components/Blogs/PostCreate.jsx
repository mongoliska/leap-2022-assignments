import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';





export default function PostCreate({ afterSubmit }) {
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    let statusCode;
    fetch('https://demo-api-one.vercel.app/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, description, text }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.success('amjilttai nemegdlee');
          afterSubmit(data.body);
        } else {
          if (statusCode === 403 || statusCode === 401) {
            navigate('/signout');
          }
          toast.error(data.message);
        }
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
      }}>
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the post..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Description of the post..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.text">
        <Form.Label>Text</Form.Label>
        <ReactQuill theme="snow" value={text} onChange={setText} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
