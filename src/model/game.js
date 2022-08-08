import mongoose from "mongoose";
const Schema = mongoose.Schema;

const game = new Schema({
    name: String,
    score: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('score', game);