const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    require:false,
  },
  initialDate: {
    type: Date,
    default:Date.now,
   
  },
  deliveryDate: {
    type: Date,
		default: () => {
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
      return oneWeekFromNow;
    },
    
  },
});

module.exports = mongoose.model('Order', orderSchema);
