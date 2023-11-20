import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ViewBooks from './pages/viewBooks/ViewBooks'
function App() {
  return (
    <>
    <Navbar/>   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/viewBooks' element={<ViewBooks/>}/>
    </Routes>
    </>
  );
}

export default App;
