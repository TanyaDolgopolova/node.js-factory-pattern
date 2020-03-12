import mongoose from "mongoose";

let OrderSchema = mongoose.Schema({
    creationDate: Date,
    buyerId: String,
    totalPrice: Number,
    products: {
        petIds: [String]
    }
});

module.exports = mongoose.model("Order", OrderSchema);
