const mongoose=require("mongoose");
async function connectDb()
{
   try {
      const uri="mongodb+srv://aparna:micro123@customersservice.krtjqjk.mongodb.net/?retryWrites=true&w=majority";
 await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
  console.log('db working');
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
}
module.exports=connectDb;