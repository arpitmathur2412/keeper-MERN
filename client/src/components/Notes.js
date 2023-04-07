import React, { useContext, useEffect, useRef} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";
import AddNote from './AddNote';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Notes() {
    const context = useContext(noteContext)
    const { notes,fetchNotes,show,handleClose} = context;

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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

export default Notes ;