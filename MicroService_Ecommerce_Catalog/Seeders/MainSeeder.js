const ProductsSeederData = require('./ProductSeeder');
const DummyUsersSeederData = require('./DummyUserSeeder');
const DummyUserModel = require('../Models/DummyUserModel');
const ProductModel = require('../Models/Products');
const connectDB = require('../DB/dbConnection');

connectDB()
    .then(() => {
        SeedData();
    })
    .catch((err) => {
        console.log('Database Connection Failed');
    });
const SeedData = async () => {
    try {
        await DummyUserModel.collection.dropIndexes();
        await DummyUserModel.collection.deleteMany({});
        await DummyUserModel.insertMany(DummyUsersSeederData);

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
