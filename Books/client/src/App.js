import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
