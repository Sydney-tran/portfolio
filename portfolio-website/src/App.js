import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Icons from "./components/Icons/Icons";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Icons />
      </>
    </Router>
  );
}

export default App;
