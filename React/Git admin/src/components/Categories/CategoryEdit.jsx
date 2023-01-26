import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import axios from 'axios';

export default function CategoryEdit({ afterEdit, category }) {
    const [description, setDescription] = useState(category?.description);
    const [name, setName] = useState(category?.name);
    // const navigate = useNavigate();

    const submit = () => {
    axios
    .put('http:/localhost:8000/categories/'+category.id, { name })
        .then((res) => {
            toast.success('amjilttai zasagdlaa');
            afterEdit(res.data);
        })
        .catch((err) => {
            console.log(err);
            toast.error('aldaa garlaa')
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
            <Form.Group className="mb-3" controlId="form.description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    as="textarea"
                    rows={3}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
