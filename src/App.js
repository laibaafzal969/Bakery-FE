import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Home } from "./pages/Home";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Menu from "./Components/Menu";
import LoginPage from "./pages/Login";
import Products from "./Components/Products";
import { isAuthenticated } from "./utils/functions";
import OrdersPage from "./Components/Order";
import AdminContact from "./Components/AdminContact";
import UsersPage from "./Components/UsersPage";

const App = () => {
  const isAuth = isAuthenticated();
  const [auth, setAuth] = useState(isAuth);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cartItems={cart} setCart={setCart} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setAuth} />}
        />
        {isAuth && (
          <>
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<OrdersPage />} />
            <Route path="/admin/contact" element={<AdminContact />} />
            <Route path="/admin/users" element={<UsersPage />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
