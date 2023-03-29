import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";

function Notes(){
    const context=useContext(noteContext)  
    const {notes,setnotes}=context;    
    
    return(
        <div>
            {notes.map((note)=>{
            return <NoteItem note={note}/>
        })}
        </div>       
    )
}

export default Notes;