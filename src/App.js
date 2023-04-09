import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
