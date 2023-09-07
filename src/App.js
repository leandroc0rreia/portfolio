import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ScrollButton from "./components/ScrollTopBtn";
import DetailedProjects from "./components/DetailedProjects/DetailedProjects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <DetailedProjects /> */}
      <Contact />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
