import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useFetch, usePost } from "../api/useApi";

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    userType: "Admin",
    password: "",
  });
  const [error, setError] = useState(null);

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useFetch("users", "/api/users");
  const { mutate: addUser, isLoading: isAdding } = usePost(
    "/api/users/register",
    {
      onSuccess: () => {
        setShowModal(false);
        setFormData({ email: "", name: "", userType: "Admin" });
        refetch(); // Refresh the user list after adding
      },
      onError: (err) => {
        setError(err?.response?.data?.message || "Failed to add user.");
      },
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      setError("Please fill out all fields.");
      return;
    }
    setError(null);
    addUser(formData);
  };

  return (
    <div
      className="container mt-5 pt-5"
      style={{ height: "83.7vh", overflowY: "auto" }}
    >
      <h2>User Management</h2>

      <div className="d-flex justify-content-end mb-3">
        <Button onClick={() => setShowModal(true)}>Add User</Button>
      </div>

      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : isError ? (
        <Alert variant="danger">Error: Failed to fetch users.</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>User Type</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user?.email}</td>
                <td>{user?.name}</td>
                <td>{user?.userType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Add User Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Pasword</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userType">
              <Form.Label>User Type</Form.Label>
              <Form.Control as="select" name="userType" value="Admin" disabled>
                <option>Admin</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isAdding}>
              {isAdding ? "Adding..." : "Add User"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UsersPage;
