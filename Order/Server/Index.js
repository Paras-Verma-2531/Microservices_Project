const express = require("express");
const app = express(); // Create an Express application

const connectDb = require('./dbconnect');
const mongoose = require("mongoose");
const PORT_NO = 4000;

// Middlewares
app.use(express.json()); // body-parser

// Connection to Database
connectDb();
require("./Model/Order");
const Order = mongoose.model("Order");

app.post("/create", (req, res) => {
    var newOrder = {
        customerId: req.body.customerId,
        bookId: req.body.bookId,
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    };

    var order = new Order(newOrder);
    order.save().then(() => {
        // console.log("Order created successfully");
        res.send("Order created successfully");
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Error creating order");
    });
});
app.get("/orders",async(req,res)=>
{
    const orders=await Order.find();
    console.log(orders);
    return res.send("done");
})

// Listen to the server
app.listen(PORT_NO, () => {
    console.log('Listening on port -->', PORT_NO);
});
