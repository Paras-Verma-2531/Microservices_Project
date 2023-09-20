import { Button, Input } from "antd";
import { Card } from "antd";
import React, {useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { axiosClient } from "../../utils/axiosClient";
import "./DeleteBook.scss";
function DeleteBook() {
  const [status, setStatus] = useState("");
  const[bookId,setBookId]=useState("");
  async function handleDelete() {
    console.log(bookId);
    const response = await axiosClient.post("/delete", {bookIdToDelete:bookId});
    setStatus(response.data);
    setBookId("");
  }
  return (
    <>
      <Card className="deleteBook" title="Delete Book" style={{ width: 500 }}>
        <Input.Password
          placeholder="Enter Book Id"
          className="input-box"
          value={bookId}
          onChange={(e)=>setBookId(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        {status && <h4>{status}</h4>}
        <Button type="primary" size="large" onClick={handleDelete}>
          Submit
        </Button>
      </Card>
    </>
  );
}

export default DeleteBook;
