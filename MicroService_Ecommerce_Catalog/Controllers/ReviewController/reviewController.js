const ReviewModel = require('../../Models/Reviews');

const getAllReviews = async (req, res, next) => {
    try {
    } catch (err) {}
};

const getReviewsForSpecificProduct = async (productId) => {
    try {
        const allReviewsBySpecificProduct = await ReviewModel.find({
            productId: productId
        }).orFail();
        return allReviewsBySpecificProduct;
    } catch (err) {
        return []
    }
};

module.exports = { getReviewsForSpecificProduct, getAllReviews };
