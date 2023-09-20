import { Button } from "antd";
import "./CreateBook.scss";
import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [image, setImage] = useState("");
  //utility function
  function handleInputImage(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  }
  //handleBookSubmit
  async function handleBookSubmit() {
    try {
      await axiosClient.post("/create", {
        title,
        publisher,
        author,
        numberOfPages: pages,
        bookImg: image,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setPages("");
      setPublisher("");
      setTitle("");
      setImage("");
      setAuthor("");
    }
  }
  return (
    <div className="createBook">
      <h2>Create Book</h2>
      <div className="left-part"></div>
      <div className="right-part">
        <div className="input-section">
          <input
            type="text"
            value={title}
            placeholder="Enter the Book Name"
            className="book-input"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            placeholder="Enter the Author Name"
            className="book-input"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            value={publisher}
            placeholder="Enter the Publisher Name"
            className="book-input"
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the pages Number"
            value={pages}
            className="book-input"
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        {image && (
          <div className="img-container">
            <img src={image} alt="book" className="book-img" />
          </div>
        )}
        <div className="bottom-part">
          <div className="input-post-img">
            <label htmlFor="image" className="labelImage">
              <BsCardImage />
            </label>
            <input
              type="file"
              id="image"
              className="inputImage"
              accept="image/*"
              onChange={handleInputImage}
            />
          </div>
          <Button type="primary" size="large" onClick={handleBookSubmit}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
