import React from "react";
import  {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import "./index.css";
import Hero from "./components/Hero";
import Arrival from "./components/Arrival";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes> */}
<Header/>
<Hero/>
<Featured/>
<Arrival/>
<Footer/>
        {/* <Link to="/header">Header</Link>
        <Link to="/footer">Footer</Link> */}
      </BrowserRouter>
    </>
  );
};

export default App;
