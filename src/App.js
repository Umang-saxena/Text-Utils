import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter,Route,Routes} from "react-router-dom";

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
    <BrowserRouter>
    <Navbar title="Text Utils" aboutText="About App" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    </div>
      <Routes>
        <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter,Character Counter , Remove extra spaces " mode={mode}/>} />
        <Route exact path='about' element={<About mode={mode}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
