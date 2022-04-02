import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MyBooks from "./pages/MyBooks/MyBooks";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
