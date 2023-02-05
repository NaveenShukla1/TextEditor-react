// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import React, { useState } from 'react'
import AboutUs from './components/AboutUs'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message) =>{
    setAlert({
      msg: message,
      // type: type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils"  />
      <Alerts alert={alert}/>
      <div className="container mx-11 my-5">

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading= "Enter Your Text Here"/>}/>
          <Route exact path="/about" element={<AboutUs />}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>


      </div> 

      </Router>
    </>
  );
}

export default App;
