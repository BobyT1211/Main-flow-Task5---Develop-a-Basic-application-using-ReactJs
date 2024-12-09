import './App.css';
import Alert from './components/Alert';
import TextForm1 from './components/TextForm1';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
    const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)//
      
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3f426a';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm1 showAlert={showAlert} heading=" Try Textutils- Word Counter, Character Counter, Remove Extra Spaces " mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
