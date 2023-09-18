const express = require("express");
const cloudinary=require('cloudinary').v2;
const cors=require('cors');
const App = express();
const connectDb = require("./dbConnect");
const bookRouter = require("./router/bookRouter");
const PORT_NO = 4000;
//config cloudinary
cloudinary.config({
  cloud_name: "dgbuktr2s",
  api_key: "433957828847378",
  api_secret: "Q-MtMOg3BCIt32_5hNp-tCAK994",
});
//middlewares
App.use(express.json({limit:"10mb"})); //body-parser
App.use(
  cors({
    origin: "http://localhost:3000",
    credentials:true,
    
  })
);
//calling to API's
App.use("/s1", bookRouter);
//connection to Database
connectDb();
//listen to the server
App.listen(PORT_NO, () => {
  console.log("listening on port-->", PORT_NO);
});
