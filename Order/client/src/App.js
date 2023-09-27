
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Create from './components/Create';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      {/* <Route path="/help" element={<About/>}></Route> */}
      <Route path="/order" element={<Orders/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
