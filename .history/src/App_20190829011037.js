import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from "./components/layouts/Footer";
import Header from './components/layouts/Header'
import './App.css';
import AboutUs from "./components/Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <AboutUs></AboutUs>
      <Navbar />
      <Header />
      <Footer />
      
    </div>
  );
}

export default App;
