const mongoose = require('mongoose');
const ProductModel = require("../Models/Products")
const UserModel = require("../Models/Users")

const ReviewSchema = mongoose.Schema({
    comment: {
        type: String
    },
    rating: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
});

const ReviewModel = mongoose.model('Review', ReviewSchema);
module.exports = ReviewModel;
