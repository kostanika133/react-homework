import "./App.css";
import { useState } from "react";
import Site from "./components/Site";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <Site /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

export default App;
