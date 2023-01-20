import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const TOAST_CONFIG={
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false, 
    theme: 'colored'
};

export default function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const navigate=useNavigate();

    const submitSignup =() => {
        let status = 200;
        fetch('https://demo-api-one.vercel.app/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, repassword}),
        })
        .then((res)=> {
            status = res.status;
            return res.json();
        })
        .then((data)=> {
            if (status !== 200) {
                toast.error(data.message, TOAST_CONFIG);
            } else {
                toast.success(data.message, TOAST_CONFIG);
                setTimeout(() => {
                    navigate('/signin');
                }, 1000);
            }
        })
        .catch((err)=>{
            console.log(err.message);
        });
    };
    

    return (
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div className='col-sm-4'>
            <div className='card'>
                <div className='card-body'>
                     <Form onSubmit={(e) => {
                        e.preventDefault();
                        submitSignup();
                     }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            value={email}
                                onChange ={(e) => {
                                setEmail(e.target.value)
                            }} 
                            type="email" placeholder="First name" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange ={(e) => {
                                setPassword(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Re-password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={repassword}
                                onChange ={(e) => {
                                setRepassword(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept the terms and conditions" />
                        </Form.Group>
                        <div className='d-flex justify-content-between'>
                        <Button variant="success" type="submit">
                           Sign Up 
                        </Button>
                        </div>
                        
                        </Form>
                </div>
            </div>
        </div>
       
        </div>
    )

}