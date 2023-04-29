import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Featured from "./pages/Featured";
import Arrival from "./pages/Arrival";
import "./index.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Featured/>} path="/featured"/>
          <Route element={<Arrival/>} path="/arrival"/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default memo(App);
