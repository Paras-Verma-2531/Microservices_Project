const {
  createBookController,
  showBookController,
  listAllBooksController,
  deleteBookController,
} = require("../controllers/bookController");

const bookRouter = require("express").Router();
//API's
bookRouter.post("/create", createBookController);
bookRouter.post("/book", showBookController);
bookRouter.get("/all", listAllBooksController);
bookRouter.delete("/delete", deleteBookController);
//export the bookRouter
module.exports=bookRouter;