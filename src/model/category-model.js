import mongoose from "mongoose";
const Schema = mongoose.Schema;

const category = new Schema({
    gener_name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('category', category);