import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function Navigationbar(props) {
  const navigate=useNavigate()

  function onLogout(e){
    e.preventDefault()
    localStorage.removeItem('token');
    navigate("/");
    props.showAlert("Logged Out Successfully",'primary');

  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand style={{marginRight:"100px"}} href="/">QuickNotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{marginRight:"20px"}} as={Link}  to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>

      {!localStorage.getItem('token')?
          <Nav>
          <Nav.Link style={{marginRight:"20px"}} as={Link} to="/login">LOGIN</Nav.Link>
          <Nav.Link as={Link} to="/signup">SIGNUP</Nav.Link>
          </Nav>:<Nav><Button onClick={onLogout} className='dark'>LOGOUT</Button></Nav>}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;