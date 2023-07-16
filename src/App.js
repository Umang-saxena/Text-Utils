import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Utils" aboutText="About App"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse"/>
    </div>
    </>
  );
}

export default App;
