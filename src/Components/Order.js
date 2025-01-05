import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { usePut, useFetch } from "../api/useApi";
import { useQueryClient } from "@tanstack/react-query";

const OrdersPage = () => {
  const queryClient = useQueryClient();
  const {
    data: orders,
    isLoading,
    isError,
  } = useFetch("orders", "/api/orders");
  const [alert, setAlert] = useState(null);

  const { mutate: updateOrderStatus, isLoading: isUpdating } = usePut(
    "/api/orders",
    {
      onSuccess: (response) => {
        setAlert({
          type: "success",
          message: `${response?.customerName} Order has been updated successfully!`,
        });
        setTimeout(() => setAlert(null), 3000);
        queryClient.invalidateQueries(["orders"]);
      },
      onError: (error) => {
        setAlert({
          type: "danger",
          message: `Failed to update order. ${error.message}`,
        });
        setTimeout(() => setAlert(null), 3000);
      },
    }
  );

  const statuses = {
    Pending: "Pending",
    Preparing: "Preparing",
    Delivered: "Delivered",
    Rejected: "Rejected",
    OnWay: "OnWay",
  };

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus({ id: orderId, status: newStatus });
  };

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
    return <Alert variant="danger">Error: Failed to fetch orders.</Alert>;
  }

  return (
    <div
      className="container mt-5 pt-5"
      style={{ height: "80vh", overflowY: "auto" }}
    >
      <h2>Orders</h2>
      {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>
                <strong>{order?.customerName}</strong>
                <br />
                {order?.email}
                <br />
                {order?.address}
              </td>
              <td>
                <ul>
                  {order?.Products?.map((product) => (
                    <li key={product?.id}>
                      {product?.name} - ${product?.price?.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                $
                {order?.Products?.reduce(
                  (sum, p) => sum + Number(p?.price) * 1,
                  0
                )?.toFixed(2)}
              </td>
              <td>
                <DropdownButton
                  title={order.status}
                  variant="secondary"
                  disabled={
                    [statuses.Delivered, statuses.Rejected].includes(
                      order.status
                    ) || isUpdating
                  }
                  onSelect={(newStatus) =>
                    handleStatusChange(order.id, newStatus)
                  }
                >
                  {Object.values(statuses).map((status) => (
                    <Dropdown.Item
                      key={status}
                      eventKey={status}
                      active={status === order.status}
                    >
                      {status}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersPage;
