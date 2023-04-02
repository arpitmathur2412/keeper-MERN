import Card from 'react-bootstrap/Card';
import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';



function NoteItem(props){

  const context=useContext(noteContext) 
  const {deleteNote}=context;    
    return(
        <Card className='shadow-sm p-3 mb-5 bg-white rounded' style={{ width: '18rem',margin:'20px',display:'inline-block'}}>
        <Card.Body>
          <Card.Title>{props.note.title}</Card.Title>
          <Card.Text>
            {props.note.description}
          </Card.Text>
        </Card.Body>
        <Card.Img onClick={()=>{deleteNote(props.note._id)}} style={{width:'20px',float:'right',marginLeft:'15px',cursor:'pointer'}} src="bin.png"></Card.Img>
        <Card.Img style={{width:'20px',float:'right',cursor:'pointer'}} src="edit.png"></Card.Img>
      </Card>
    )
}
export default NoteItem;