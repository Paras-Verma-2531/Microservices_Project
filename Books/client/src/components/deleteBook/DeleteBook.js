import { Button, Input } from "antd";
import { Card } from "antd";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { axiosClient } from "../../utils/axiosClient";
import "./DeleteBook.scss";
function DeleteBook() {
  const [status, setStatus] = useState("");
  async function onDelete() {
    const response = await axiosClient.delete("/delete");
    setStatus(response.data);
  }
  return (
    <>
      <Card className="deleteBook" title="Delete Book" style={{ width: 500 }}>
        <Input.Password
          placeholder="Enter Book Id"
          className="input-box"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        {status && <h4>{status}</h4>}
        <Button type="primary" size="large" onClick={onDelete}>
          Submit
        </Button>
      </Card>
    </>
  );
}

export default DeleteBook;
