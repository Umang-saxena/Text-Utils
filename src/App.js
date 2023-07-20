import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import About from './components /About';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
    <Navbar title="Text Utils" aboutText="About App" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
