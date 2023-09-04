const mongoose=require('mongoose');
//structue of the book schema
const bookSchema=mongoose.Schema(
    {
      
    }
)
module.exports=mongoose.model('Book',bookSchema);