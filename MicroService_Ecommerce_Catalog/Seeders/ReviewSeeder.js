const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ReviewSeederData = [
    {
        comment: 'This is the Best Product',
        rating: 2,
        userId: { _id:"641acf355523d3be56a6549a" },
        productId: { _id: "641af388bbb8266b6ce1ed3e" }
    },
    {
        comment: 'This is the Best Product 2',
        rating: 5,
        userId: { _id: "641acf355523d3be56a6549a" },
        productId: { _id: "641af388bbb8266b6ce1ed3e" }
    }
];


module.exports = ReviewSeederData
