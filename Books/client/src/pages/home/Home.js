import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default Home;
