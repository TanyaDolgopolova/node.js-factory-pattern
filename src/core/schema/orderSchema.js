import mongoose from "mongoose";

module.export = new mongoose.Schema({
    creationDate: Date,
    buyerId: String,
    totalPrice: Number,
    products: {
        petIds: [String]
    }
});
