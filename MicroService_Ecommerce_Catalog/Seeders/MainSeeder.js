const DummyUser = require('./DummyUserSeeder')
const DummyUserModel = require('../Models/DummyUserModel')
const connectDB = require('../DB/dbConnection')

connectDB()
    .then(() => {
        SeedData()
    })
    .catch((err) => {
        console.log('Database Connection Failed')
    })
const SeedData = async () => {
    try {
        await DummyUserModel.collection.dropIndexes()
        await DummyUserModel.collection.deleteMany({})
        await DummyUserModel.collection.insertMany(DummyUser)
        console.log('Seeder data proceeded successfully')
    } catch (err) {
        console.error('Error while proccessing seeder data', error)
        process.exit(1)
    }
}
