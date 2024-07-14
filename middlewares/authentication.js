const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');
const developerModel = require('../models/developer-model');

module.exports.isLoggedIn = async (req, res, next) => {
    if (!req.cookies.token) {
        return res.send('Login first');
    }
    else if (req.cookies.iam === 'user') {
        try {
            let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            const user = await userModel
            .findOne({ email: decoded.email })
            .select('-password');
            
            req.user = user;
            next();
        }
        catch (err) {
            console.log(err);
            return res.send(err);
        }
    }
    else if (req.cookies.iam === 'developer') {
        try {
            let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            const developer = await developerModel
            .findOne({ email: decoded.email })
            .select('-password');
            
            req.developer = developer;
            next();
        }
        catch (err) {
            console.log(err);
            return res.send(err);
        }
    }
}
