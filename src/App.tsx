import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className=" px-0 sm:px-10">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
