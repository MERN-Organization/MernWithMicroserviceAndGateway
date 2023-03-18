const express = require('express');
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    logInUser
} = require('../Controllers/UserController/userController');
const router = express.Router();
console.log("Coming here")

router.get('/', getUsers);
router.post('/login', logInUser);
router.post('/create', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
