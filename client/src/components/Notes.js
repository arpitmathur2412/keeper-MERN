import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Notes(props) {

    const navigate=useNavigate();
    const context = useContext(noteContext)
    const { notes, fetchNotes,editNote, show, handleClose,handleShow } = context;

    let [enote,setenote]=useState({id:"",title:"", description:"", tag:""})

    function onChange(event){
        setenote({...enote,[event.target.name]:event.target.value})
    }


    function onClick(e){
        e.preventDefault()
        console.log({enote});
        editNote(enote.id,enote.title,enote.description,enote.tag)
        handleClose()
        props.showAlert("Updated Successfully","success")
    }

    useEffect(() => {
        if(localStorage.getItem('token')){   
        fetchNotes()
        }
        else {
        navigate("/login")
        }
    })

    const updateNote=(currentnote)=> {
        handleShow();
        setenote({id:currentnote._id,title:currentnote.title,description:currentnote.description,tag:currentnote.tag})
    }

    return (
        <div>
            <AddNote showAlert={props.showAlert} />
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header style={{backgroundColor:"#B4E4FF"}} closeButton>
                        <Modal.Title>Edit Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    autoFocus
                                    name="title"
                                    value={enote.title}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    name="description"
                                    value={enote.description}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Tag</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    name="tag"
                                    value={enote.tag}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onClick}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {notes.map((note) => {
                return <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
            })}
        </div>
    )
}

export default Notes;