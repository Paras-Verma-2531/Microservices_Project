import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyCarousel from "./components/carousel/MyCarousel";
import MainPage from "./pages/MainPage";
import Signup from "./pages/singup/Signup";
import ViewBooks from "./pages/viewBooks/ViewBooks";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<MyCarousel/>}/>
          <Route path="/viewBooks" element={<ViewBooks/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      
    </>
  );
}

export default App;
