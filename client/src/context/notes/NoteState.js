import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{  
    const host="http://localhost:5000"  
    const initialnotes=
    [
        {
          "_id": "641d1f36338dfdertertetwqweqq44600608a87",
          "userid": "641b570db9ebcd914d969205",
          "title": "updated note bro",
          "description": "updated description",
          "tag": "updated",
          "date": "2023-03-24T03:55:34.702Z",
          "__v": 0
        },
        {
          "_id": "6424tertret479c0d0db7a3ea9283d7b",
          "userid": "641b570db9ebcd914d969205",
          "title": "set alarm",
          "description": "wake up for work",
          "tag": "personal",
          "date": "2023-03-29T14:13:48.385Z",
          "__v": 0
        },
        {
            "_id": "6424c479c0d0d7a3ea9ertert283d7b",
            "userid": "641b570db9ebcd914d969205",
            "title": "set alarm",
            "description": "wake up for work",
            "tag": "personal",
            "date": "2023-03-29T14:13:48.385Z",
            "__v": 0
          },
          {
            "_id": "6ertert424479c0d0d7a3dea9283d7b",
            "userid": "641b570db9ebcd914d969205",
            "title": "set alarm",
            "description": "wake up for work",
            "tag": "personal",
            "date": "2023-03-29T14:13:48.385Z",
            "__v": 0
          },
          {
            "_id": "6424479c0d0qweqd7ea3ea9283d7b",
            "userid": "641b570db9ebcd914d969205",
            "title": "set alarm",
            "description": "wake up for work",
            "tag": "personal",
            "date": "2023-03-29T14:13:48.385Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(initialnotes)
    
      //fetching all notes

      async function fetchNotes(){

        //API CALL
        const response = await fetch(`${host}/api/notes/fetchnotes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU3MGRiOWViY2Q5MTRkOTY5MjA1In0sImlhdCI6MTY3OTYwMDgwMH0.icE5gqqDSJ1QLWty4T3r1Dhv4BFNx-IWtbBFzzR2eXc"
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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU3MGRiOWViY2Q5MTRkOTY5MjA1In0sImlhdCI6MTY3OTYwMDgwMH0.icE5gqqDSJ1QLWty4T3r1Dhv4BFNx-IWtbBFzzR2eXc"
            },
        
          body: JSON.stringify({title,description,tag}) 
        });
        const json=response.json()  

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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU3MGRiOWViY2Q5MTRkOTY5MjA1In0sImlhdCI6MTY3OTYwMDgwMH0.icE5gqqDSJ1QLWty4T3r1Dhv4BFNx-IWtbBFzzR2eXc"
            }
        });
        const json=response.json()
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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYjU3MGRiOWViY2Q5MTRkOTY5MjA1In0sImlhdCI6MTY3OTYwMDgwMH0.icE5gqqDSJ1QLWty4T3r1Dhv4BFNx-IWtbBFzzR2eXc"
            },
        
          body: JSON.stringify({title,description,tag}) 
        });
        const json=response.json()

      
        // logic to edit in client

        for(let i=0;i<notes.length;i++){
          let element=notes[i];
          if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
        }
      }

      return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;