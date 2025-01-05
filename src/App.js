import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
