import { ROUTES } from "./constants/routes.js";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import University from "./pages/university.jsx";
import Home from "./pages/home.jsx";
import "./App.css";
import Universities from "./pages/universities.jsx";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.universities} element={<Universities />} />
      <Route path={ROUTES.university} element={<University />} />
    </Routes>
  );
}

export default App;
