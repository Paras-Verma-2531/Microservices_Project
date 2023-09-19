import React from "react";
import { Card } from "antd";
import "./SingleBook.scss";
function SingleBook({ book }) {
  return (
    <div className="book">
      <Card
        className="card"
        style={{
          width: 320,
          objectFit:"contain"
        }}
        bordered={false}
        cover={<img alt={book?.title} src={book?.bookImage?.url} />}
      >
        <h2 className="book-title">{`${book?.title}`}</h2>
        <h3 className="book-info-author">{`Author : ${book?.author}`}</h3>
        <h4 className="book-info-publisher">{`Publisher : ${book?.publisher}`}</h4>
        <p className="book-info-pages">{`Pages : ${book?.noOfPages}`}</p>
      </Card>
    </div>
  );
}

export default SingleBook;
