const bookOutput = require("../bookUtils");
const Book = require("../model/Book");
//createBook
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
//list Details of Book
const showBookController = async (req, res) => {
  const {bookId}=req.body;
  try {
    const book = await Book.findById(bookId);
    if(!book)return res.status(404).send("book not found");
    return res.status(200).json(book)
  } catch (error) {
     return res.status(500).send(error);
  }
};
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
