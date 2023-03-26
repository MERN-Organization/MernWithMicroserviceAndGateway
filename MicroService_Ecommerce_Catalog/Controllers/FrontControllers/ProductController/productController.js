const ProductModel = require('../../../Models/Products');
const {
    genericFunctionTosendJsonResponse
} = require('../../../Utils/ApiResponceUtils');
const {
    getReviewsForSpecificProduct
} = require('../ReviewController/reviewController');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await ProductModel.find().orFail();
        res.json(
            genericFunctionTosendJsonResponse(
                'Product Fetched SuccessFully',
                allProducts
            )
        );
    } catch (err) {
        next(err);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const allReviewsForSpecificProduct = await getReviewsForSpecificProduct(
            productId
        );

        const specificProduct = await ProductModel.findById(productId)
            .populate({
                path: 'productSubCategory',
                populate: {
                    path: 'primaryCategory'
                }
            })
            .orFail();
        specificProduct.productReviews = allReviewsForSpecificProduct;

        res.json(
            genericFunctionTosendJsonResponse(
                'Specific Product Fetched SuccessFully',
                specificProduct
            )
        );
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllProducts, getProductById };
