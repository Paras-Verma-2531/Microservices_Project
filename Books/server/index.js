const express = require("express");
const { showBookController } = require("./controllers/bookController");
const App = express();
const connectDb = require("./dbConnect");
const bookRouter = require("./router/bookRouter");
const PORT_NO = 4000;
//middlewares
App.use(express.json()); //body-parser
//calling to API's
App.use("/s1", bookRouter);
//connection to Database
connectDb();
//listen to the server
App.listen(PORT_NO, () => {
  console.log("listening on port-->", PORT_NO);
});
