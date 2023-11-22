const express=require("express") //creating new express server
const { Aggregate } = require("mongoose")
const app=express() //creating an instance of express application
const cors=require('cors');
const mongoose=require("mongoose")

const connectDb = require("./dbConnect")//connect to database

const bodyParser=require("body-parser")//bodyparser
app.use(express.json());//allows data to be received
app.use(cors(
    {
        credentials:true,
        origin:"http://localhost:3000"
    }
))

//load customer model

require("../server/model/Customer")
const Customer = mongoose.model("Customer")

//API CREATING NEW CUSTOMER
app.post("/signup",(req,res)=>{
    var newCustomer={
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    }

    var customer=new Customer(newCustomer) //Instanceof APO

    customer.save().then(()=>{
    res.send("Customer created")
    }).catch((err) => {
        if(err){
            throw err
        }
        })
}) //API END

//NEW API: List out the customers
app.get("/index",(req,res)=>{
  Customer.find().then((customers)=>{
    res.json(customers)
  }).catch((err)=>{
    if(err){
        throw err
    }
  })
})//API END

//NEW API: LIST SINGLE CUSTOMER
app.get("/customers/:id",(req,res)=>{
    Customer.findById(req.params.id).then((customers)=>{
        if(customers){
            res.json(customers)
        }else{
            res.send("INVALID ID")
        }
    }).catch((err)=>{
        if(err){
            throw err
        }
    })
})//API END
 
//NEW API:DELETE CUSTOMER
app.delete("/customers/:id",(req,res)=>{
    Customer.findByIdAndRemove(req.params.id).then(()=>{
        res.send("Customer deleted with success!")
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
}) //API END

//connect to database
connectDb();
app.listen("5555",()=>{
    console.log("Up and running-Customer service")
})