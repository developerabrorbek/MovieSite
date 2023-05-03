import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import FeaturedPage from "./pages/Featured";
import "./index.css";
import ArrivalPage from "./pages/Arrival";
import About from "./pages/About";
import SearchPage from "./pages/Search";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<FeaturedPage/>} path="/featured"/>
          <Route element={<ArrivalPage/>} path="/arrival"/>
          <Route element={<About/>} path="/about/:id"/>
          <Route element={<SearchPage/>} path="/search/:text"/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default memo(App);
