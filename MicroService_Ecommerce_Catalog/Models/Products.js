const mongoose = require("mongoose")
const ReviewModel = require("../Models/Reviews")
const SubCategoryModel = require("../Models/SubCategories")


const productImageType = [
    {
        path: String,
        imageName: String
    }
];

const productAttrsType = {
    productSize: [String],
    productColor: [String],
    productMaterial: [String]
};

const productPriceVariations = {
    size: {
        type: Object
    },
    color: {
        type: Object
    },
    material: {
        type: Object
    }
};

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productSubCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SubCategoryModel
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImages: {
        type: productImageType
    },
    productReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ReviewModel
    }],
    productSku: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productAttrs: {
        type: productAttrsType
    },
    productIsCutomisable: {
        type: Boolean,
        default: false
    },
    productMadeFor: {
        type: [String],
        default: ['All']
    },
    productLabourCharges: {
        type: Number,
        default: 0
    },
    productPriceVariations: {
        type: productPriceVariations
    },
    productImagesVariantions: {
        type: mongoose.Schema.Types.Mixed,
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
