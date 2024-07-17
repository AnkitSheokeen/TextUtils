  
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {

  return (
    <>

    <NavBar title="Text...Utils" />
    
    <div className='container my-3'>
      <TextForm heading="Enter the text to analysis"/>
      <About/>
    </div>

    </>
  );
}

export default App;
