//util function to send only required data:
const bookOutput = (book) => {
  return {
    Bookid: book._id,
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    noOfPages: book.numberOfPages,
  };
};
module.exports = bookOutput;
