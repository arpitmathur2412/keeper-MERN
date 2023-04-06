import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";
import AddNote from './AddNote';

function Notes(){
    const context=useContext(noteContext) 
    const {notes,fetchNotes}=context;    
    useEffect(()=>{
        fetchNotes()
    })

    function updateNote(note){

    }

    return(
        <div>
            <AddNote/>
            
            {notes.map((note)=>{
            return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
        })}
        </div>       
    )
}

export default Notes;