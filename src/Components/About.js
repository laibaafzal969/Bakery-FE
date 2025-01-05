import React from "react";
import CreditPopup from "./Popups";
import "./about.css";

const description =
  "Featuring delicious handmade pastries and freshly ground coffee";

const About = () => (
  <div id="about">
    <div className="d-flex flex-column bd-highlight mb-3 about-bg">
      <div className="flex-fill align-self-center">
        <div className="container text-center">
          <h1 className="display-4 description">{description}</h1>
        </div>
      </div>
      <div className="ml-auto p-2 bd-highlight">
        <CreditPopup
          credit={
            <a id="photoCredit" href="https://unsplash.com/@karishea">
              Photo by Laiba Afzal on Unsplash
            </a>
          }
        />
      </div>
    </div>
  </div>
);

export default About;
