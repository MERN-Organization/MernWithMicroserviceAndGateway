const mongoose = require('mongoose');

const DummyUserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const DummyUserModel = mongoose.model('DummyUser', DummyUserSchema);
module.exports = DummyUserModel;
