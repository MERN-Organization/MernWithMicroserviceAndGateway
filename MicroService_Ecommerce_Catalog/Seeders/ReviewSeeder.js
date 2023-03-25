const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;

const ReviewSeederData = [
    {
        comment: 'This is the Best Product',
        rating: 2,
        userId: { _id:"641acf355523d3be56a6549a" },
        productId: { _id: "641f27af7a93aff5c2d9ec86" }
    },
    {
        comment: 'This is the Best Product 2',
        rating: 5,
        userId: { _id: "641acf355523d3be56a6549a" },
        productId: { _id: "641f27af7a93aff5c2d9ec86" }
    },
    {
        comment: 'This is the Best Product 3',
        rating: 5,
        userId: { _id: "641acf355523d3be56a6549a" },
        productId: { _id: "641c3fef918c6fe284707727" }
    }
    
];


module.exports = ReviewSeederData
