const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        address: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        mobileNo: {
            type: String,
            required: true
        },
        DOB: {
            type: Date,
            required: true
        },
        userReviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    },
    {
        timestamps: true
    }
);

UsersSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

const UserModel = mongoose.model('User', UsersSchema);
module.exports = UserModel;
