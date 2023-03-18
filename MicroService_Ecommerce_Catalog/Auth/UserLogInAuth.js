const jwt = require('jsonwebtoken');

const verifyIfUserLoggedIn = async (req, res, next) => {
    if (!req.cookies.LoggedInCokkie) {
        res.status(401).send(
            "You Won't Be able to Access This Resource As You have not Provided Auth Token"
        );
    } else {
        try {
            const Decode = jwt.verify(
                req.cookies.LoggedInCokkie,
                process.env.SECRET_TOKEN
            );
            if (Decode) {
                next();
            }
        } catch (err) {
            res.status(401).send('Please Provide Valid Auth Token');
        }
    }
};

module.exports = verifyIfUserLoggedIn;
