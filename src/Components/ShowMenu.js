import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom
import "./showMenu.css"; // Make sure to create this CSS file for styling

export const ShowMenu = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    // This function will be called when the button is clicked
    navigate("/menu"); // Redirect to the /menu route
  };

  return (
    <div className="showMenu-container">
      <div className="showMenu-content">
        <h1 className="showMenu-title">Welcome to Our Bakery!</h1>
        <p className="showMenu-description">
          Indulge in freshly baked goods made with love and the finest
          ingredients. From our signature pastries to freshly ground coffee, we
          have something for every craving. Explore our menu now!
        </p>
        <button className="showMenu-button" onClick={handleClick}>
          Show Menu
        </button>
      </div>
      <div className="showMenu-overlay">
        <p className="showMenu-footer-text">
          <i>"Baked with love and passion"</i>
        </p>
      </div>
    </div>
  );
};
