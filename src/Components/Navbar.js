import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/functions";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { usePost } from "../api/useApi";

const Navbar = ({ setAuth, cartItems, setCart }) => {
  const navigate = useNavigate();
  const isAuth = isAuthenticated();
  const pathNameUrl = window.location.pathname;

  const [showModal, setShowModal] = useState(false);
  const createProductMutation = usePost("/api/orders", {
    onSuccess: () => {
      setCart([]); // Clear the cart
      setShowModal(false); // Close the modal
      alert("Order placed successfully!");
    },
  });
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalAmount = cartItems?.reduce((sum, item) => sum + item.price, 0);

  const showAdminNavPanel = pathNameUrl.includes("/admin") && isAuth;

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    setAuth(false);
  };

  const removeItemsFromCart = (item, index) => {
    setCart((prev) => {
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1); // Remove the item at the found index
        return newCart;
      }
      return prev;
    });
  };

  const handleCheckoutChange = (e) => {
    setCheckoutInfo({ ...checkoutInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Handle the order placement logic
    createProductMutation.mutate({
      ...checkoutInfo,
      customerName: checkoutInfo?.name,
      totalPrice: totalAmount?.toFixed(2),
      productIds: cartItems?.map((item) => item.id),
    });
    console.log(
      "Order placed with the following details:",
      checkoutInfo,
      cartItems
    );
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal
  };

  if (showAdminNavPanel) {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
        id="nav"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/users">
                  Users
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button onClick={logout} className="btn btn-outline-light">
                Logout
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => navigate("/")}
                className="btn btn-outline-light"
              >
                Shop Home
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
          id="nav"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                {/* Shopping Cart Dropdown */}
                <div className="dropdown me-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Cart ({cartItems?.length ?? 0})
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {!cartItems?.length ? (
                        <Dropdown.Item disabled>
                          You have no items in cart
                        </Dropdown.Item>
                      ) : (
                        <>
                          {cartItems?.map((item, index) => (
                            <Dropdown.Item
                              onClick={(event) => {
                                event.stopPropagation();
                                removeItemsFromCart(item, index);
                              }}
                              key={index}
                            >
                              {item?.name} - ${item?.price?.toFixed(2)}
                            </Dropdown.Item>
                          ))}
                          <Dropdown.Divider />
                          <Dropdown.Item
                            onClick={(event) => {
                              event.stopPropagation();
                              setShowModal(true); // Open the modal
                            }}
                          >
                            Checkout
                          </Dropdown.Item>
                        </>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Link to="/login">
                  <button className="btn btn-outline-light">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Checkout Modal */}
        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={checkoutInfo.name}
                  onChange={handleCheckoutChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={checkoutInfo.email}
                  onChange={handleCheckoutChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={checkoutInfo.address}
                  onChange={handleCheckoutChange}
                />
              </Form.Group>
              <h5>Items in Cart</h5>
              <ul>
                {cartItems?.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <h5>Total Amount: ${totalAmount?.toFixed(2)}</h5>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default Navbar;
