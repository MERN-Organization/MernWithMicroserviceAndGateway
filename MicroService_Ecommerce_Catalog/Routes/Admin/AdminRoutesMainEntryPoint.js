const express = require('express');
const app = express()
const {
    adminLogin
} = require('../../Controllers/AdminControllers/AdminUserController/AdminUserController');
const { checkIfRequestCameForAdmin } = require('../../Utils/miscellaneous');
const router = express.Router();

router.get('/login', adminLogin);
app.use(checkIfRequestCameForAdmin);

module.exports = router;
