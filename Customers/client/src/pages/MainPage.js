import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
function MainPage() {
  return (
    <div className="mainPage">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default MainPage