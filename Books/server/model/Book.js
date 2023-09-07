const mongoose=require('mongoose');
//structue of the book schema
const bookSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  publisher: {
    required: true,
    type: String,
  },
  numberOfPages: {
    required: true,
    type: String,
  },
});
module.exports=mongoose.model('Book',bookSchema);