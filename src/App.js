import React from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
