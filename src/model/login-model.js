import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    user: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('user', user);