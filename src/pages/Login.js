// Import required libraries
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePost } from "../api/useApi";
// import "./App.css";

// Authentication Component
const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const mutation = usePost("/api/users/login", {
    onSuccess: (data) => {
      localStorage.setItem("authToken", data?.token);
      navigate("/admin/products");
      setIsAuthenticated(true);
    },
    onError: (error) => {},
  });
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    mutation.mutate({ email: email, password: password });
  };

  return (
    <div className="container mt-5 pt-5" style={{ height: "80vh" }}>
      <h2>Login</h2>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
