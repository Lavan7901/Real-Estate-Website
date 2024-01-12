import React from 'react';
import Navbar from './components/Navbar'; 
import Home from "./components/Home";
import Properties from "./components/Properties";
import Client from "./components/Client";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Properties />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
