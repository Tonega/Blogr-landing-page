import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Design from './components/Design';
import Blogr from './components/Blogr';
import Simple from './components/Simple';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      <div className="app-container">
      <NavBar/>
      <Hero/>
      </div>



      <Design/>
      <Blogr/>
      <Simple/>
      <Footer/>
    <Routes>
      
    </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
