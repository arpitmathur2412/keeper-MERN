import Card from 'react-bootstrap/Card';
function NoteItem(props){
    return(
        <Card className='shadow-sm p-3 mb-5 bg-white rounded' style={{ width: '18rem',margin:'20px',display:'inline-block'}}>
        <Card.Body>
          <Card.Title>{props.note.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.note.tag}</Card.Subtitle>
          <Card.Text>{props.note.description}</Card.Text>
        </Card.Body>
        </Card>
    )
}
export default NoteItem;