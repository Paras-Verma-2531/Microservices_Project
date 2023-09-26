//util function to send only required data:
const bookOutput = (book) => {
  return {
    bookId: book._id,
    bookImage:book.bookImage,
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    noOfPages: book.numberOfPages,
  };
};
module.exports = bookOutput;
