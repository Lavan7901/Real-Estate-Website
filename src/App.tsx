import Navbar from './components/Navbar/Navbar'; 
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Properties from "./components/Properties/Properties";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Journey from './components/Journey/Journey';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Journey />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
