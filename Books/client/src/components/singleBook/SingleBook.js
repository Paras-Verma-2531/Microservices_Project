import React from "react";
import { Card } from "antd";
import "./SingleBook.scss";
import {GoCopy} from 'react-icons/go'
function SingleBook({ book }) {
  return (
    <div className="book">
      <Card
        className="card"
        style={{
          width: 320,
        }}
        bordered={false}
        cover={
          <img
            className="book-image"
            alt={book?.title}
            src={book?.bookImage?.url}
          />
        }
      >
        <h2 className="book-title">{`${book?.title}`}</h2>
        <h3 className="book-info-author">{`Author : ${book?.author}`}</h3>
        <h4 className="book-info-publisher">{`Publisher : ${book?.publisher}`}</h4>
        <h4 className="book-info-pages">{`Pages : ${book?.noOfPages}`}</h4>
        <div className="copy-to-cp">
          <p>
            <p>{book?.bookId}</p>
          </p>
          <GoCopy
            className="copy-icon"
            onClick={()=>navigator.clipboard.writeText(
              book?.bookId
            )}
          />
        </div>
      </Card>
    </div>
  );
}

export default SingleBook;
