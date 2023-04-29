import React, { memo } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import "./index.css";
import Hero from "./components/Hero";
import Arrival from "./components/Arrival";
import GetData from "./components/GetData";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Featured/>
        <Arrival />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default memo(App);
