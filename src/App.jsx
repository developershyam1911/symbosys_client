import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Products from "./components/Products";
import ContactHome from "./components/ContactHome";
import Career from "./components/Career";
import { ToastContainer } from "react-toastify";
import SingleProducts from "./components/SingleProducts";
import SingleServices from "./components/SingleServices";
import WhatsppBtn from "./components/WhatsppBtn";
import CallingBtn from "./components/CallingBtn";

const App = () => {
  return (
    <div>
      <WhatsppBtn />
      <CallingBtn />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="about" />
        <Route element={<Blog />} path="blog" />
        <Route element={<Products />} path="products" />
        <Route element={<SingleProducts />} path="products/:slug" />
        <Route element={<SingleServices />} path="services/:slug" />
        <Route element={<ContactHome />} path="contact" />
        <Route element={<Career />} path="career" />
      </Routes>
    </div>
  );
};

export default App;
