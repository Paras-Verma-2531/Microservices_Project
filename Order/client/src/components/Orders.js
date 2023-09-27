import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [customerNames, setCustomerNames] = useState({});
  const [bookTitles, setBookTitles] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:4001/orders")
      .then((response) => {
        console.log("Success", response.data);
        setOrders(response.data);
        fetchCustomerNames(response.data); // Fetch customer names
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders", error);
        setIsLoading(false);
      });
  };

  const fetchCustomerNames = (ordersData) => {
    const customerIds = ordersData.map((order) => order.customerId);
    const uniqueCustomerIds = [...new Set(customerIds)];

    const customerNamePromises = uniqueCustomerIds.map(async (customerId) => {
      try {
        const response = await axios.get(`http://localhost:5555/customers/${customerId}`);
        return { customerId, name: response.data.name };
      } catch (error) {
        console.error("Error fetching customer name", error);
        return { customerId, name: "" };
      }
    });

    Promise.all(customerNamePromises).then((customerNamesArray) => {
      const customerNamesObject = customerNamesArray.reduce((acc, { customerId, name }) => {
        acc[customerId] = name;
        return acc;
      }, {});
      setCustomerNames(customerNamesObject);

      // After fetching customer names, fetch book titles
      fetchBookTitles(ordersData);
    });
  };

  const fetchBookTitles = (ordersData) => {
    const bookIds = ordersData.map((order) => order.bookId);
    const uniqueBookIds = [...new Set(bookIds)];

    const bookTitlePromises = uniqueBookIds.map(async (bookId) => {
      try {
        const response = await axios.post(`http://localhost:4000/s1/book`,
        {
          bookId
        });
        return { bookId, title: response.data.title };
      } catch (error) {
        console.error("Error fetching book title", error);
        return { bookId, title: "" };
      }
    });

    Promise.all(bookTitlePromises).then((bookTitlesArray) => {
      const bookTitlesObject = bookTitlesArray.reduce((acc, { bookId, title }) => {
        acc[bookId] = title;
        return acc;
      }, {});
      setBookTitles(bookTitlesObject);
    });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-6">Fetched Orders</h2>
      <div className="row mt-4">
        {isLoading ? (
          <div className="alert alert-info">Loading...</div>
        ) : Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <div className="col-md-3 mb-3" key={order._id}>
              <div className="card">
                <div className="card-header">Order Details</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Customer Name: {customerNames[order.customerId] || "N/A"}
                  </li>
                  <li className="list-group-item">
                    Book Title: {bookTitles[order.bookId] || "Holly-Sister"}
                  </li>
                  <li className="list-group-item">
                    Initial Date: {new Date(order.initialDate).toLocaleString()}
                  </li>
                  <li className="list-group-item">
                    Delivery Date: {new Date(order.deliveryDate).toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-info">No orders available</div>
        )}
      </div>
    </div>
  );
};

export default Orders;
