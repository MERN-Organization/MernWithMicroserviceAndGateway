const DummyUserModel = require('../../Models/DummyUserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const hashPassword = require('../../Utils/miscellaneous');

const getUsers = async (req, res, next) => {
    try {
        const DummyUserData = await DummyUserModel.find().orFail();

        res.json(DummyUserData);
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    console.log("asdasdasdasd")
    try {
        const { email, name, password } = req.body;
        if(email && name && password){
            const hashedPassword = hashPassword(password);
            const newUser = new DummyUserModel({
                email,
                name,
                password: hashedPassword
            });
    
            await newUser.save();
            res.status(201).json({
                Message: 'New User Created SuccessFully',
                newUser
            }); 
        }
        else{
            res.status(404).send("Please Provide Details")
        }
  
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { email, name } = req.body;

        const foundUser = await DummyUserModel.findById(userId).orFail();

        foundUser.email = email || foundUser.email;
        foundUser.name = name || foundUser.name;

        await foundUser.save();
        res.json({
            Message: 'User Updated Succesfully',
            foundUser
        });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const deletedUser = await DummyUserModel.findByIdAndDelete(userId);
        res.json({
            Message: 'User Deleted Succesfully',
            deletedUser
        });
    } catch (err) {
        next(err);
    }
};

const logInUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const query = {
                email: new RegExp(email, 'i')
            };

            const foundUserBymail = await DummyUserModel.findOne(query);
            const cookieOfLogin = jwt.sign(
                { email: email, password: password },
                process.env.SECRET_TOKEN
            );
            let options = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            };
            if (bcrypt.compareSync(password, foundUserBymail.password)) {
                res.cookie('LoggedInCokkie', cookieOfLogin, options).send(
                    'User Has been Logged in Successfully'
                );
            } else {
                res.status(401).send('Wrong Credentials');
            }
        } else {
            res.status(500).send(
                'Please Input All the Fields as Every Field is Required to Login'
            );
        }
    } catch (err) {
        next(err);
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, logInUser };
