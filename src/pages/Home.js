import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { ShowMenu } from "../Components/ShowMenu";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ShowMenu />
    </div>
  );
};
