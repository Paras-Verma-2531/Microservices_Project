const mongoose = require("mongoose");
async function connectDb() {
  const uri =
    "mongodb+srv://500091612:kwWbxsxCLckmtXfm@cluster0.0jginvr.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  
}
module.exports = connectDb;