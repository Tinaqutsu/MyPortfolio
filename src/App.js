// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contacts from './Components/Contacts/Contacts';  




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
     <About/>
     <Skills />
     <Contacts/>
    </div>
  );
}

export default App;
