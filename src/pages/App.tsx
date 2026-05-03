import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Listings from "./Listings";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Navbar from "../components/ui-items/Navbar";

export default function App() {
  return (
    <div className="flex flex-col font-serif">
      <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Listings" element={<Listings />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

      </Router>
    </div>
  );
}
