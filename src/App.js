  
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
  const [abcolor,setAbcolor] = useState({    //about section color palatte
    color: 'black',
    backgroundColor: 'white',
  })

  const toggleMode = (cls) => {
    if(cls === 'primary'){
      setMode('primary')
      document.body.style.backgroundColor = '#0d6efd';
      showAlert("blue mode has been enable","success");

      setAbcolor({
        color: 'black',
        backgroundColor: '#0d6efd',
      })
    }
    else if(cls === 'secondary'){
      setMode('secondary');
      document.body.style.backgroundColor = '#6c757d';
      showAlert("secondary mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: '#6c757d',
      })
    }else if(cls === 'success'){
      setMode('success');
      document.body.style.backgroundColor = '#198754';
      showAlert("green mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: '#198754',
      })
    }else if(cls === 'danger'){
      setMode('danger');
      document.body.style.backgroundColor = '#dc3545';
      showAlert("red mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: '#dc3545',
      })
    }else if(cls === 'warning'){
      setMode('warning');
      document.body.style.backgroundColor = '#ffc107';
      showAlert("yello mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: '#ffc107',
      })
    }else if(cls === 'info'){
      setMode('info');
      document.body.style.backgroundColor = '#0dcaf0';
      showAlert("Light mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: '#0dcaf0',
      })
    }else if(cls === 'white'){
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
      setAbcolor({
        color: 'black',
        backgroundColor: 'white',
      })
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#1E3F53';
      showAlert("dark mode has been enable","success"); 
      setAbcolor({
        color: 'white',
        backgroundColor: '#1E3F53',
      })
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
            <Route exact path="/about" element={<About mode={mode} color={abcolor}/>} />
          </Routes>       
        </div>
      </Router>
    </>
  );
}

export default App;
