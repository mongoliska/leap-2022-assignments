import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function PostEdit({ afterEdit, article }) {
    const [description, setDescription] = useState(article?.description);
    const [name, setName] = useState(article?.name);
    const [text, setText] = useState(article?.text);
    const navigate = useNavigate();

    const submit = () => {
        let statusCode;
        fetch('https://demo-api-one.vercel.app/api/articles', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify({ id: article?.id, name, description, text }),
        })
            .then((res) => {
                statusCode = res.status;
                return res.json();
            })
            .then((data) => {
                if (statusCode === 200) {
                    console.log(text)
                    toast.success('amjilttai nemegdlee');
                    afterEdit(data.body);
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

