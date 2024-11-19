const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;
 
const productSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    catagory: {
        catagoryId: { type: objectId, ref: 'categories'},
        catagoryName: { type: String }
    },
    viewCount: { type: Number, default: 0 }, 
    hot: { type: Number, default: 0 },
    brand: {        
        brandId: { type: objectId, ref: 'brands'},
        brandName: { type: String }
    }
});

module.exports = mongoose.models.product || mongoose.model('product', productSchema);
