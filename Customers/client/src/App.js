import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyCarousel from "./components/carousel/MyCarousel";
import ViewBooks from "./components/ViewBooks";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<MyCarousel/>}/>
          <Route path="/viewBooks" element={<ViewBooks/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
