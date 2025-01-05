import React from "react";
import ModalImage from "react-modal-image";
import menu1 from "../img/menu1.png"; // Replace with actual image paths
import menu1Big from "../img/menu1Big.png"; // Replace with actual image paths
import "./menu.css"; // Make sure to update CSS for card styling
import { useFetch } from "../api/useApi";

// Sample menu items
const menuItems = [
  {
    id: 1,
    title: "Chocolate Cake",
    description: "Rich, decadent chocolate cake topped with chocolate ganache.",
    price: "$5.99",
    image: menu1, // Use different images for each item
    imageBig: menu1Big,
  },
  {
    id: 2,
    title: "Strawberry Cheesecake",
    description: "Creamy cheesecake with a tangy strawberry topping.",
    price: "$6.99",
    image: menu1, // Use different images for each item
    imageBig: menu1Big,
  },
  {
    id: 3,
    title: "Lemon Meringue Pie",
    description: "Light and zesty lemon curd with a fluffy meringue topping.",
    price: "$4.99",
    image: menu1, // Use different images for each item
    imageBig: menu1Big,
  },
];

const menuDescription = "Explore our exciting menu of delicious desserts";

const Menu = ({ setCart }) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("products", "/api/products");

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="container" id="menu">
      <h3 className="col text-center">Menu</h3>
      <p className="col text-center lead">{menuDescription}</p>
      <div className="row menuContainer">
        {products?.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="menu-card">
              <ModalImage
                small={item.imageUrl}
                large={item.imageUrl}
                alt={item.description}
                className="menu-card-img"
              />
              <div className="menu-card-body">
                <h5 className="menu-card-title">{item.name}</h5>
                <p className="menu-card-description">{item.description}</p>
                <p className="menu-card-price">${item.price}</p>
                <button
                  className="menu-card-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
