import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [customerId, setCustomerId] = useState("");
  const [bookId, setBookId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4001/create", {
        customerId,
        bookId,
        // Add any other fields you need for the order here
      });

      console.log(response.data); // Assuming the response is a success message
      setCustomerId("");
      setBookId("");
      setShowAlert(true); // Show the alert on successful order creation

      // Hide the alert after a few seconds (optional)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide after 3 seconds (adjust as needed)
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <>
      <h2 className="container">Create Order</h2>
      <form onSubmit={handleSubmit} className="container mt-3">
        <input
          className="form-control form-control-sm mt-3"
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          style={{ width: "250px" }}
          aria-label="Customer ID"
        />
        <input
          className="form-control form-control-sm mt-3"
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          style={{ width: "250px" }}
          aria-label="Book ID"
        />
        <button type="submit" className="btn btn-secondary mt-3">
          Create Order
        </button>

        {showAlert && (
          <div className="alert alert-primary mt-3" role="alert">
            Order Created Successfully!
          </div>
        )}
      </form>
    </>
  );
};

export default Create;
