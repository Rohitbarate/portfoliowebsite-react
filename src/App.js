import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
