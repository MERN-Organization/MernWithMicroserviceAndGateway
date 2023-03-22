const ProductModel = require('../../Models/Products');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await ProductModel.find().orFail();
        res.json({
            Message: 'Product Fetched Successfully',
            data: allProducts
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllProducts };
