import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useFetch, usePost, usePut, useDelete } from "../api/useApi"; // Import the delete hook
import Modal from "react-bootstrap/Modal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get queryClient to manage cache and invalidate queries
  const queryClient = useQueryClient();

  // Fetch products using custom hook
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("products", "/api/products");

  // Create product using custom hook
  const createProductMutation = usePost("/api/products", {
    onSuccess: () => {
      // Invalidate the products query to refetch data
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Update product using custom hook
  const updateProductMutation = usePut("/api/products", {
    onSuccess: () => {
      // Invalidate the products query to refetch data
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Delete product using custom hook
  const deleteProductMutation = useDelete("/api/products", {
    onSuccess: () => {
      // Invalidate the products query to refetch data
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle saving the product (both create and update)
  const handleSave = () => {
    if (selectedProduct) {
      // Update product (PUT request)
      updateProductMutation.mutate(
        {
          id: selectedProduct.id,
          ...formData,
        },
        selectedProduct.id
      );
    } else {
      // Create product (POST request)
      createProductMutation.mutate(formData);
    }
    setShowModal(false);
    setFormData({
      name: "",
      price: "",
      description: "",
      imageUrl: "",
    });
    setSelectedProduct(null);
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
    setShowModal(true);
  };

  // Handle creating a new product
  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setFormData({
      name: "",
      price: "",
      description: "",
      imageUrl: "",
    });
    setShowModal(true);
  };

  // Handle deleting a product
  const handleDelete = (id) => {
    deleteProductMutation.mutate({ id });
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Products</h1>
      <button className="btn btn-primary mb-3" onClick={handleCreateProduct}>
        Create Product
      </button>
      {products?.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="row">
          {products?.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Edit/Create */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProduct ? "Edit Product" : "Create Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
