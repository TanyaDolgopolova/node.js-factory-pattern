import mongoose from "mongoose";

module.export = new mongoose.Schema({
    _id: String,
    creationDate: Date,
    buyerId: String,
    totalPrice: Number,
    products: {
        petIds: [String]
    }
});
