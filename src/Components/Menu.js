import React from "react";
import ModalImage from "react-modal-image";
import menu1 from "../img/menu1.png"; // Replace with actual image paths
import menu1Big from "../img/menu1Big.png"; // Replace with actual image paths
import "./menu.css"; // Make sure to update CSS for card styling
import { useFetch } from "../api/useApi";

// Sample menu items
const menuItems = [
  {
    id: 2,
    name: "Ferrero Rocher Cupcake",
    price: 24.5,
    description: "Lots & lots of hazelnut chocolate!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUom-Jjb0_Oe_4MpmZ6KXLHiMdyUAWZndkpA&s",
    createdAt: "2025-01-05T14:31:26.000Z",
    updatedAt: "2025-01-09T09:01:36.000Z",
  },
  {
    id: 4,
    name: "Airplane Cupcakes",
    price: 42,
    description: "Airplane Birthday Party - Love to be in the Kitchen",
    imageUrl:
      "https://www.lovetobeinthekitchen.com/wp-content/uploads/2014/02/Airplane-Birthday-Party-5.jpg",
    createdAt: "2025-01-05T14:50:20.000Z",
    updatedAt: "2025-01-09T09:23:34.000Z",
  },
  {
    id: 5,
    name: "Macha cupcakes",
    price: 44,
    description: "Amazing macha cupcakes",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vhnEVgEVOx9P3KtBWDKjeyfS-0q3AxqheA&s",
    createdAt: "2025-01-05T14:56:10.000Z",
    updatedAt: "2025-01-05T14:57:12.000Z",
  },
  {
    id: 7,
    name: "Lava Cake",
    price: 11,
    description: "Loaded Chocolate Filling",
    imageUrl:
      "https://borrowedbites.com/wp-content/uploads/2022/08/Chocolate-Lava-Cake.jpg",
    createdAt: "2025-01-07T13:35:36.000Z",
    updatedAt: "2025-01-07T13:35:36.000Z",
  },
  {
    id: 8,
    name: "Cheese Cake",
    price: 14,
    description: "A Slice Of Heaven",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.jF2-pGAtL2RyZt1qHqNaVgHaHa&pid=Api&P=0&h=220",
    createdAt: "2025-01-07T13:40:49.000Z",
    updatedAt: "2025-01-07T13:42:31.000Z",
  },
  {
    id: 9,
    name: "Kunafa Chocolate",
    price: 22,
    description: "Pistachio and Chocolate Filling",
    imageUrl:
      "https://ilovearabicfood.com/wp-content/uploads/2020/03/10-Knafeh-with-Chocolate.jpg",
    createdAt: "2025-01-09T08:59:36.000Z",
    updatedAt: "2025-01-09T09:00:31.000Z",
  },
  {
    id: 10,
    name: "Red Velvet Cake",
    price: 34,
    description: "Moist and very Creamy",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.W9jyztCbk6km1CJjK2-oVAHaE8&pid=Api&P=0&h=220",
    createdAt: "2025-01-09T09:25:12.000Z",
    updatedAt: "2025-01-09T09:25:12.000Z",
  },
  {
    id: 11,
    name: "Cappuccino",
    price: 12,
    description: "Coffee Drink",
    imageUrl:
      "https://www.bennett-shop.de/wp-content/uploads/2014/12/cappuccino.jpg",
    createdAt: "2025-01-10T04:20:53.000Z",
    updatedAt: "2025-01-10T04:20:53.000Z",
  },
  {
    id: 13,
    name: "Chocolate Tart",
    price: 11,
    description: "Yummy",
    imageUrl:
      "https://www.abakingjourney.com/wp-content/uploads/2021/05/Mini-Chocolate-Tarts-Feature.jpg",
    createdAt: "2025-01-10T05:32:54.000Z",
    updatedAt: "2025-01-10T05:32:54.000Z",
  },
];

const menuDescription = "Explore our exciting menu of delicious desserts";

const Menu = ({ setCart }) => {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetch("products", "/api/products");
  // console.log("🚀 ~ Menu ~ products:", products);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="container" id="menu">
      <h3 className="col text-center">Menu</h3>
      <p className="col text-center lead">{menuDescription}</p>
      <div className="row menuContainer">
        {menuItems?.map((item) => (
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
                <p className="menu-card-price">${item.price?.toFixed(2)}</p>
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
