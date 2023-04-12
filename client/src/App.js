import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import Navigationbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { useState } from 'react';
import Alerts from './components/Alert';


function App() {
  const [alert,setAlert]=useState({message:"",variant:""})
  const showAlert=(msg,variant)=>{
    setAlert({
      message:msg,
      variant:variant
    })
    setTimeout(()=>{
      setAlert({message:"",variant:""})
    },2500)
  }

  return (
    <>
    <NoteState>
    <Router>
      <Navigationbar showAlert={showAlert} />
      <Alerts alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
        <Route exact path="/about" element={<About showAlert={showAlert}/>} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
    </Router>
    </NoteState>
    </>
  )
}

export default App;
