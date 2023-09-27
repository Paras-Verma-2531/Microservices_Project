import React from "react";
import "./Admin.scss";
import CreateBook from "../../components/createBook/CreateBook";
import DeleteBook from "../../components/deleteBook/DeleteBook";
function Admin() {
  return (
    <div className="admin">
      <div className="left-side">
        <CreateBook />
      </div>
      <div className="right-side">
        <DeleteBook/>
      </div>
    </div>
  );
}

export default Admin;
