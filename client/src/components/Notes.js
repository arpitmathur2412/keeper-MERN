import React, { useContext, useEffect, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";
import AddNote from './AddNote';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Notes() {
    const context = useContext(noteContext)
    const { notes, fetchNotes, show, handleClose } = context;

    useEffect(() => {
        fetchNotes()
    })

    const ref = useRef(null)
    function updateNote(note) {
        ref.current.click()
    }

    return (
        <div>
            <AddNote />
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
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
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    name="description"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

            {notes.map((note) => {
                return <NoteItem key={note._id} updateNote={updateNote} note={note} />
            })}
        </div>
    )
}

export default Notes;