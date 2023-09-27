const express = require("express");
const app = express(); // Create an Express application
const cors = require('cors');

const connectDb = require('./dbconnect');
const mongoose = require("mongoose");
const PORT_NO = 4001;

// Middlewares
app.use(express.json()); // body-parser

// Connection to Database
connectDb();
require("./Model/Order");
const Order = mongoose.model("Order");
app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.post("/create", (req, res) => {
    var newOrder = {
        customerId: (req.body.customerId),
        bookId: (req.body.bookId),
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
    return res.send(orders);
})

//
 
app.get("/order/:id",(req,res)=>
{
    Order.findById(req.params.id).then((order)=>
    {
        if(order)
        { 
            axios.get("http://localhost:5555/customers/" + order.customerId).then((response)=>
            {
                var orderObject = {customerName:response.data.name,bookTitle:''}
                // axios.get("http://localhost:4000/s1/all/" + order.bookId).then((response)=>
                // {
                //     orderObject.bookTitle=response.data.title
                //     res.json(orderObject)
                // })
                console.log(response?.data?.name);
                res.send("Quick response");
            })
            
        }
        else
        {
            res.send("Invalid Order")
        }
    });
});

// Listen to the server
app.listen(PORT_NO, () => {
    console.log('Listening on port -->', PORT_NO);
});
