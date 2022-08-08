import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
    name_product: String,
    type: String,
    image: String,
    price: String,
    brand: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('product', product);