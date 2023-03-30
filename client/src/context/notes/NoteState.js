import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{    
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
    
      return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;