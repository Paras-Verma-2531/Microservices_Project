import React from "react";
import "./Navbar.scss";
import user from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="left-side">
        <h2 className="header" onClick={() => navigate("/")}>
          BookWise
        </h2>
      </div>
      <div className="right-side">
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/viewBooks")}
        >
          View Books
        </Button>
        <img
          src={user}
          alt="user"
          className="user-img"
          onClick={() => navigate("/admin")}
        />
      </div>
    </div>
  );
}
export default Navbar;
