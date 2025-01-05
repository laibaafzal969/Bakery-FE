import React from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "../api/useApi";

const AdminContact = () => {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useFetch("contacts", "/api/contacts");

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">Error: Failed to fetch contact data.</Alert>;
  }

  return (
    <div
      className="container mt-5 pt-5"
      style={{ height: "83.7vh", overflowY: "auto" }}
    >
      <h2>Customer Queries</h2>
      {contacts?.length === 0 ? (
        <Alert variant="info">No customer queries available.</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>
                  {new Date(contact.createdAt).toLocaleDateString() +
                    "   " +
                    new Date(contact.createdAt).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminContact;
