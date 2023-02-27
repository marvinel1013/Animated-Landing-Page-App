import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1200,
    offset: 0,
  });
  return (
    <Router>
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
