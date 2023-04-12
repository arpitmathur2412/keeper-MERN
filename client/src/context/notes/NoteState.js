import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{  
    const host="http://localhost:5000"

    const initialnotes=[{}];

      const [notes,setNotes]=useState(initialnotes)
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      //fetching all notes

      async function fetchNotes(){

        //API CALL
        const response = await fetch(`${host}/api/notes/fetchnotes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
            }
        });
        const json=await response.json()
        // console.log(json);
        setNotes(json)
      }
    
      //Add a note
      
      async function addNote(newnote){
        const title=newnote.title
        const description=newnote.description
        const tag=newnote.tag;

        const response = await fetch(`${host}/api/notes/createnote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
            },
        
          body: JSON.stringify({title,description,tag}) 
        });
        const json=response.json()  
        console.log(json);
        // ADD API CALL
        const note={
          title,
          description,
          tag
        }
        setNotes(notes.concat(note))
        
      }
      

      //delete a note
      async function deleteNote(id){

        const response = await fetch(`${host}/api/notes/deletenote/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
            }
        });
        const json=response.json()
        console.log(json);
        // setNotes(json)

        // ADD API CALL
        console.log("deleting note with id "+id)
        setNotes(notes.filter((note)=>{return note._id!==id}))
      }
    


      //edit a note
      async function editNote(id,title,description,tag){
        // ADD API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
            },
        
          body: JSON.stringify({title,description,tag}) 
        });
        const json=response.json()
        console.log(json);

      
        // // logic to edit in client

        // for(let i=0;i<notes.length;i++){
        //   let element=notes[i];
        //   if(element._id===id){
        //     element.title=title;
        //     element.description=description;
        //     element.tag=tag;
        //   }
        // }
      }

      return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchNotes,show,handleClose,handleShow}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;