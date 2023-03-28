import React from 'react';
import Navigationbar from "./Navbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from "./Login.css"
import Button from 'react-bootstrap/Button';

function Login(){
    return(
        <div>
            <Navigationbar/>
            <div className='login-form' style={styles}>
            <Form action='/form' method='post'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Name</Form.Label>
                <Col sm="3">
                <Form.Control type="text" placeholder="Name" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Email</Form.Label>
                <Col sm="3">
                <Form.Control type="email" placeholder="Email" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Password</Form.Label>
                <Col sm="3">
                <Form.Control type="password" placeholder="Password" />
                </Col>
                </Form.Group>
                <Button type='submit' variant="dark">Login</Button>
            </Form>
            </div>
        </div>
    )
}

export default Login;