  
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //dark mode

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1E3F53';
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
    }
  }

  const [alert, setAlert] = useState(); //alert message

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500)
  }


  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/>
        <Alert alert ={alert}/>
    
        <div className='container my-3'>    
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analysis" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>       
        </div>
      </Router>
    </>
  );
}

export default App;
