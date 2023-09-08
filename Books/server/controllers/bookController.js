//createBook
const bookOutput = require("../../bookUtils");
const Book = require("../model/Book");
const createBookController = async (req, res) => {
  try {
    const { title, author, numberOfPages, publisher } = req.body; //destruct the data from body
    const newBook = await Book.create({
      title,
      author,
      publisher,
      numberOfPages,
    });
    return res.json({newBook});
  } catch (error) {
    console.log(error);
  }
};
//deleteBook
const deleteBookController = async (req, res) => {
  try {
    const { bookIdToDelete } = req.body;
    //if book not present
    const bookToDelete = await Book.findById(bookIdToDelete);
    console.log(bookToDelete);
    if (!bookToDelete) return res.status;
    await Book.deleteOne({_id:bookIdToDelete });
    return res.send(200, "book deleted");
  } catch (error) {
    console.log(error);
  }
};
//listBook
const showBookController = async (req, res) => {res.send('in show')};
//listAllBooks
const listAllBooksController = async (req, res) =>{
  const Books=await Book.find();
  const allBooks=Books.map(book=>bookOutput(book));
  return res.json({allBooks})
}
module.exports = {
  createBookController,
  deleteBookController,
  showBookController,
  listAllBooksController,
};
