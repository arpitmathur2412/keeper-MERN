import Card from 'react-bootstrap/Card';
import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';



function NoteItem(props) {

  const context = useContext(noteContext)
  const { deleteNote, handleShow } = context;


  return (

    <Card className='shadow-sm p-3 mb-5 bg-white roundedx' style={{ backgroundColor: '#ECF2FF', width: '18rem', margin: '20px', display: 'inline-block', color: "#2C74B3" }}>
      <Card.Header style={{ backgroundColor: "#C9EEFF" }}>{props.note.tag}</Card.Header>
      <Card.Body>
        <Card.Title>{props.note.title}</Card.Title>
        <Card.Text>
          {props.note.description}
        </Card.Text>
      </Card.Body>
      <Card.Img onClick={() => {
        deleteNote(props.note._id)
        props.showAlert("Deleted Successfully", "success")
      }} style={{ width: '20px', float: 'right', marginLeft: '15px', cursor: 'pointer' }} src="bin.png"></Card.Img>
      <Card.Img onClick={() => {
        handleShow();
        props.updateNote(props.note)
      }} style={{ width: '20px', float: 'right', cursor: 'pointer' }} src="edit.png"></Card.Img>
    </Card>
  )
}
export default NoteItem;