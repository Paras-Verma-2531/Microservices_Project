import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import ViewBooks from "./pages/viewBooks/ViewBooks";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/viewBooks" element={<ViewBooks />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
