import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from "./Login.css"
import Button from 'react-bootstrap/Button';

function Login(props){
    const navigate=useNavigate()
    const [login,setLogin]=useState({email:"",password:""})

    function onChange(e){
        setLogin({...login,[e.target.name]:e.target.value})
    }


    async function onClick(e){
        e.preventDefault()
        const host="http://localhost:5000"
        const response = await fetch(`${host}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU3MGRiOWViY2Q5MTRkOTY5MjA1In0sImlhdCI6MTY3OTYwMDgwMH0.icE5gqqDSJ1QLWty4T3r1Dhv4BFNx-IWtbBFzzR2eXc"
            },
        
          body: JSON.stringify({email:login.email,password:login.password}) 
        });
        const json=await response.json()  
        console.log(json);
        
        if(json.success){
            // save the auth-token and redirect
            props.showAlert("Logged In Successfully!","primary")
            localStorage.setItem('auth-token',json.authtoken)
            navigate("/");
        } 
        else props.showAlert("Invalid Credentials!","danger")
        
    }

    return(
        <div>
            <div className='login-form' style={styles}>
            <h2 style={{styles}}>LOGIN</h2>
            <br></br>
            <Form action='/login' method='post'>
           
                <Form.Group as={Row} className="mb-3" controlId="login-email">
                <Form.Label column sm="2">Email</Form.Label>
                <Col sm="3">
                <Form.Control onChange={onChange} type="email" placeholder="Email" name="email" value={login.email}/>
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="login-pass">
                <Form.Label column sm="2">Password</Form.Label>
                <Col sm="3">
                <Form.Control type="password" onChange={onChange} placeholder="Password" name="password" value={login.password}
                />
                </Col>
                </Form.Group>
                <Button type='submit' onClick={onClick} variant="dark">Login</Button>
            </Form>
            </div>
        </div>
    )}

export default Login;