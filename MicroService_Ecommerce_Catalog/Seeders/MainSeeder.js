const ProductModel = require('../Models/Products');
const UserModel = require('../Models/Users');
const ReviewModel = require('../Models/Reviews');
const CategoryModel = require('../Models/Categories');
// Seeder Data
const ProductsSeederData = require('./ProductSeeder');
const UsersSeederData = require('./UsersSeeder');
const ReviewSeederData = require('./ReviewSeeder');
const CategorySeederData = require('./CategorySeeder');
const SubCategorySeederData = require('./SubCategorySeeder');
const connectDB = require('../DB/dbConnection');
const SubCategoryModel = require('../Models/SubCategories');

connectDB()
    .then(() => {
        SeedData();
    })
    .catch((err) => {
        console.log('Database Connection Failed');
    });
const SeedData = async () => {
    let processingString = 'Processing';
    setInterval(() => {
        console.info(processingString);
        processingString += '.';
    }, 20);
    try {
        await UserModel.collection.dropIndexes();
        await UserModel.collection.deleteMany({});
        await UserModel.insertMany(UsersSeederData);

        // await CategoryModel.collection.dropIndexes();
        // await CategoryModel.collection.deleteMany({});
        // await CategoryModel.insertMany(CategorySeederData);

        // await SubCategoryModel.collection.dropIndexes();
        // await SubCategoryModel.collection.deleteMany({});
        // await SubCategoryModel.insertMany(SubCategorySeederData);

        // await ReviewModel.collection.dropIndexes();
        // await ReviewModel.collection.deleteMany({});
        // await ReviewModel.insertMany(ReviewSeederData);

        await ProductModel.collection.dropIndexes();
        await ProductModel.collection.deleteMany({});
        await ProductModel.insertMany(ProductsSeederData);

        console.log('Seeder data proceeded successfully');
        process.exit();
    } catch (err) {
        console.error('Error while proccessing seeder data', err);
        process.exit(1);
    }
};
