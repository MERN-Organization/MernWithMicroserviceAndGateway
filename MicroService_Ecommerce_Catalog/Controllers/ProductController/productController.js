const ProductModel = require('../../Models/Products');
const {
    genericFunctionTosendJsonResponse
} = require('../../Utils/ApiResponceUtils');

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

module.exports = { getAllProducts };
