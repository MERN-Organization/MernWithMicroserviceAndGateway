const { default: mongoose } = require('mongoose');

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

const productImagesVariations = {
    key: [String]
};

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
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
    productReviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    },
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
        type: productImagesVariations
    }
});

const ProductModel = mongoose.model('Products', ProductSchema);
module.exports = ProductModel;
