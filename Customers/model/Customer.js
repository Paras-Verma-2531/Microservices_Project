const mongoose=require("mongoose") //to define customer collection
const customersSchema = mongoose.Schema(
   {
      name: {
         type: String,
         require: true
        },
        phone: {
         type: String,
         require: true
        },
        address: {
         type: String,
         require:true
        },
        email:{
         type:String,
         require:true
        },
        password:{
         type: String,
         require:true
        }
   });
module.exports=mongoose.model('Customer',customersSchema);

//Customer.findByIdAndDelete(req.params.id, {useFindAndModify: false})