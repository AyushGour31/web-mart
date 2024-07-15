const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');
const developerModel = require('../models/developer-model');

module.exports.isLoggedIn = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash('error', 'You must be Logged in');
        return res.redirect('/register');
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
            req.flash('error', err.message);
            return res.redirect('/user/signin');
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
            req.flash('error', err.message);
            return res.redirect('/developer/signin');
        }
    }
}
