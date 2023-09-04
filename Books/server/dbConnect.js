const mongoose = require("mongoose");
async function connectDb() {
  const uri =
    "mongodb+srv://paras:6JMfsl17iRFEoLoI@book.sqymawx.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
module.exports = connectDb;
