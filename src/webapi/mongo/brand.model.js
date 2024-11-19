//kết nối collection product
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;
 
const brandSchema = new Schema({
    name : {type: String,require:true},
    description:{type:String,require:true},
    img:{type:String,require:true}
})
module.exports = mongoose.models.brandSchema || mongoose.model('brand',brandSchema)
