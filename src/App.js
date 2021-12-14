import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import KeyFeatures from "./Components/Pages/KeyFeatures"
import Pricing from "./Components/Pages/Pricing"
import Testimonials from "./Components/Pages/Testimonials"
import Demo from "./Components/Pages/Demo"
import './App.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/features' element={<KeyFeatures />}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/testimonials' element={<Testimonials/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
