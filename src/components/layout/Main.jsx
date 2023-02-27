import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Recovery from "../../pages/Recovery";
import Cloud from "../../pages/Cloud";
import Contact from "../../pages/Contact";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
