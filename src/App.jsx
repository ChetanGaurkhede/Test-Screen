import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Inventory from "./Pages/Inventory";

function App() {
  return (
    <div className="App flex ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
