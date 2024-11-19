const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const orderSchema = new Schema({
    name : {type: String},
    quantity : {type: Number},
    date : {type: Date, default: Date.now()},
    img : {type: String},
    price : {type: Number},
    status : {type: Number},
    total: {type: Number},
    userId : {type: Schema.Types.ObjectId, ref: 'users'},
  });
  

module.exports = mongoose.models.order || mongoose.model('order', orderSchema);
