import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServiceSection from './Components/ServiceSection';
import Portfolio from './Components/Portfolio';
import Freelancer from './Components/Freelancer';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import AllComponents from './Components/AllComponents';

function App() {
  return (
    <>
      <div className="bg-light">
        <Navbar />
        <AllComponents />
        <Footer />
      </div>

    </>
  );
}

export default App;
