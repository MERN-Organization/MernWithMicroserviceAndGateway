const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const checkIfRequestCameFromGateway = (req, res, next) => {
    if (req.headers.isfromgateway && req.headers.host == "localhost:3000") {
        next();
    } else {
        res.status(500).send('Method is not Coming From Gateway');
    }
};

module.exports = { hashPassword, checkIfRequestCameFromGateway };
