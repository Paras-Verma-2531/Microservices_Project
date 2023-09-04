const express=require('express');
const Book=express();
const connectDb=require('./dbConnect');
const PORT_NO=4000;
//middlewares
Book.use(express.json());//body-parser
//connection to Database
connectDb();
//listen to the server
Book.listen(PORT_NO,()=>
{
   console.log('listening on port-->',PORT_NO);
})