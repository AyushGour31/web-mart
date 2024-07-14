const bycript = require('bcrypt');
const userModel = require('../models/user-model');
const developerModel = require('../models/developer-model');
const { generateToken } = require('../utilities/helper');

// '/' routes
// register route
module.exports.getRegister = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('authentication/register', { page: 'Register', error, success });
}

// '/users' routes

// signup user
module.exports.getSignUpUser = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('authentication/userSignup', { page: 'Sign-Up User', error, success });
}
module.exports.postSignUpUser = async function (req, res) {
    try{
        const { fullname, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) { 
            req.flash('error', 'Account already Exists');
            return res.redirect('/user/signup');
        }
        bycript.genSalt(10, (err, salt) => {
            bycript.hash(password, salt, async (err, hash) => {
                if (err) {
                    req.flash('error', err.message);
                    return res.redirect('/user/signup');
                }
                const user = await userModel.create({
                    fullname,
                    email,
                    password: hash,
                });

                let token = generateToken(user);
                req.flash('success', 'Account Created Successfully');
                res
                    .cookie('token', token)
                    .redirect('/');
            });
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/user/signup');
    }
}

// signin user
module.exports.getSignInUser = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('authentication/userSignin', { page: 'Sign-In User', error, success });
}
module.exports.postSignInUser = async function (req, res) {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (!user) {
            req.flash('error', 'User does not Exists');
            return res.redirect('/user/signin');
        }
        bycript.compare(password, user.password, (err, result) => {
            if (result) {
                let token = generateToken(user);
                req.flash('success', 'Logged in Successfully');
                res
                    .cookie('token', token)
                    .redirect('/');
            } else {
                req.flash('error', 'Wrong Email or Password')
                res.redirect('/user/signin');
            }
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/user/signin');
    }
}

// '/developers' routes

// signup developer
module.exports.getSignUpDeveloper = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('authentication/developerSignup', { page: 'Sign-Up Developer',error, success });
}
module.exports.postSignUpDeveloper = async function(req, res) {
    try{
        const { fullname, email, password } = req.body;
        const developer = await developerModel.findOne({ email });
        if (developer) { 
            req.flash('error', 'Account already Exists');
            return res.redirect('/developer/signup');
        }
        bycript.genSalt(10, (err, salt) => {
            bycript.hash(password, salt, async (err, hash) => {
                if (err) {
                    console.log(err);
                    req.flash('error', err.message);
                    return res.redirect('/developer/signup');
                }
                const developer = await developerModel.create({
                    fullname,
                    email,
                    password: hash,
                });

                let token = generateToken(developer);
                req.flash('success', 'Account Created Successfully');
                res
                    .cookie('token', token)
                    .redirect('/');
            });
        });
    } catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/developer/signup');
    }
}

// signin developer
module.exports.getSignInDeveloper = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('authentication/developerSignin', { page: 'Sign-In Developer', error, success });
}
module.exports.postSignInDeveloper = async function(req, res) {
    try {
        let { email, password } = req.body;
        let developer = await developerModel.findOne({ email });
        if (!developer) {
            req.flash('error', 'Developer does not Exists');
            return res.redirect('/developer/signin');
        }
        bycript.compare(password, developer.password, (err, result) => {
            if (result) {
                let token = generateToken(developer);
                req.flash('success', 'Logged in Successfully');
                res
                    .cookie('token', token)
                    .redirect('/');
            } else {
                req.flash('error', 'Wrong Email or Password')
                res.redirect('/developer/signin');
            }
        });
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/developer/signin');
    }
}

// signout user or developer
module.exports.getSignout = function (req, res) {
    req.flash('success', 'Logged out Successfully');
    res
        .cookie('token', '')
        .cookie('iam', '')
        .redirect('/register');
}
