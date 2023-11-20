import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup.scss";
import TextArea from "antd/es/input/TextArea";
function Signup() {
  //fetch the data::
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone_no, setUserPhone_no] = useState("");
  const navigate=useNavigate();
  //function to handle Data on submit
  async function handleSubmit(event) {
    event.preventDefault(); //prevent the default behaviour of form
    try {
      const result = await axiosClient.post(
        "signup",
        //send the data in the body of API
        {
            name: userName,
            phone: userPhone_no,
            address: userAddress,
            email: userEmail,
            password: userPassword
        }
      );
      navigate('/viewBooks')

    } catch (error) {
      console.log(error);
    }
    finally
    {
        setUserAddress("");
        setUserEmail("");
        setUserName("");
        setUserPassword("");
        setUserPhone_no("");
    }
  }
  return (
    <div className="Signup">
      <div className="signup-box">
        <h2 className="signup-heading">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="signup-input"
            onChange={(event) => setUserName(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="signup-input"
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <label htmlFor="phone_no">Phone Number</label>
          <input
            type="phone_no"
            id="phone_no"
            className="signup-input"
            onChange={(event) => setUserPhone_no(event.target.value)}
          />
          <label htmlFor="address">Address</label>
          <TextArea
            type="address"
            id="address"
            className="signup-input"
            onChange={(event) => setUserAddress(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="signup-input"
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <input type="submit" className="signup-submit" />
        </form>
        <p className="login-Navigate">
          Already have an Account?
          <span>
            <Link className="link" to="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;