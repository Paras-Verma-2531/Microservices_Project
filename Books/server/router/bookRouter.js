const {
  createBookController,
  showBookController,
  listAllBooksController,
  deleteBookController,
} = require("../controllers/bookController");

const bookRouter = require("express").Router();
//API's
bookRouter.post("/create", createBookController);
bookRouter.get("/book", showBookController);
bookRouter.get("/all", listAllBooksController);
bookRouter.post("/delete", deleteBookController);
//export the bookRouter
module.exports=bookRouter;