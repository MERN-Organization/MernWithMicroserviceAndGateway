const mongoose = require('mongoose');
const CategoryModel = require("../Models/Categories")

const SubCategorySchema = mongoose.Schema({
    subCategoryName: {
        type: String,
        required: true
    },
    primaryCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CategoryMode
    }
});

const SubCategoryModel = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategoryModel;
