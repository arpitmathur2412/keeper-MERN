import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </NoteState>
    </>
  )
}

export default App;
