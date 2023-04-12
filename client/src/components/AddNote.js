import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from "./Login.css"
import Button from 'react-bootstrap/Button';
import noteContext from '../context/notes/noteContext';


function AddNote(){
    const context=useContext(noteContext) 
    const {addNote}=context;    

    const [newnote,setnewnote]=useState({title:"", description:"", tag:""})


    function onChange(event){
        setnewnote({...newnote,[event.target.name]:event.target.value})
    }

    function handleClick(event){
        event.preventDefault()
        addNote(newnote)
    }


    return(
        <div>
            <div className='login-form' style={styles}>

            <Form action='/form' method='post'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2"><strong>TITLE</strong></Form.Label>
                <Col sm="3">
                <Form.Control onChange={onChange} type="text" value={newnote.title} name="title" placeholder="title" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
                <Form.Label column sm="2"><strong>DESCRIPTION</strong></Form.Label>
                <Col sm="3">
                <Form.Control type="text" onChange={onChange} value={newnote.description} name="description" placeholder="description" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2"><strong>TAG</strong></Form.Label>
                <Col sm="3">
                <Form.Control type="text" name="tag" value={newnote.tag} onChange={onChange} placeholder="tag" />
                </Col>
                </Form.Group>
                <Button type='submit' variant="dark" onClick={handleClick}>Create</Button>
            </Form>
            </div>
        </div>
    )

}

export default AddNote;
