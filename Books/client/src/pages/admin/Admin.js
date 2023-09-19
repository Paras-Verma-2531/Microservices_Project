import React from "react";
import "./Admin.scss";
import CreateBook from "../../components/createBook/CreateBook";
function Admin() {
  return (
    <div className="admin">
      <div className="left-side">
        <CreateBook />
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default Admin;
