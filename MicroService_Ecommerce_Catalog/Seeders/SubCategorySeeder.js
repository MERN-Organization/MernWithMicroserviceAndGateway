const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const subCategoriesSeederData = [
    {
        subCategoryName: 'Laptop',
        primaryCategory: { _id: new ObjectId() },  
    }
];

module.exports = subCategoriesSeederData;