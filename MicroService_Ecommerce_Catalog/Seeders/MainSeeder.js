const ProductModel = require('../Models/Products');
const UserModel = require('../Models/Users');
const ReviewModel = require('../Models/Reviews');

// Seeder Data
const ProductsSeederData = require('./ProductSeeder');
const UsersSeederData = require('./UsersSeeder');
const ReviewSeederData = require('./ReviewSeeder');
const connectDB = require('../DB/dbConnection');

connectDB()
    .then(() => {
        SeedData();
    })
    .catch((err) => {
        console.log('Database Connection Failed');
    });
const SeedData = async () => {
    let processingString = "Processing"
    setInterval(() => {
        console.info(processingString)
        processingString += "."
    }, 20);
    try {
        await UserModel.collection.dropIndexes();
        await UserModel.collection.deleteMany({});
        await UserModel.insertMany(UsersSeederData);

        await ProductModel.collection.dropIndexes();
        await ProductModel.collection.deleteMany({});
        await ProductModel.insertMany(ProductsSeederData);

        // await ReviewModel.collection.dropIndexes();
        // await ReviewModel.collection.deleteMany({});
        // await ReviewModel.insertMany(ReviewSeederData);

        console.log('Seeder data proceeded successfully');
        process.exit();
    } catch (err) {
        console.error('Error while proccessing seeder data', err);
        process.exit(1);
    }
};
