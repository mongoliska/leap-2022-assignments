import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
                                                                          

export default function Singin(){

    return (
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div className='col-sm-4'>
            <div className='card'>
                <div className='card-body'>
                     <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <div className='d-flex justify-content-between'>
                        <Link to={'/Register'}>
                        <Button variant="success" type="submit">
                             Sign Up
                        </Button>
                        </Link>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        </div>
                        
                        </Form>
                </div>
            </div>
        </div>
       
        </div>

    )
}