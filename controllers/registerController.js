const userModel = require('../models/user-model');
const developerModel = require('../models/developer-model');

// "/" routes
module.exports.getHome = function (req, res) {
    res.render('index', { title: 'Express' });
}

module.exports.getRegister = function (req, res) {
    res.render('register');
}

// "/users" routes
module.exports.getSignUpUser = function(req, res) {
    res.render('signup');
}
module.exports.postSignUpUser = async function (req, res) {
    try{
        let { fullname, email, password } = req.body;
        const user = await userModel.create({
            fullname,
            email,
            password
        });

        console.log(user);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/home');
    }
}

module.exports.getSignInUser = function(req, res) {
    res.render('signin');
}
module.exports.postSignInUser = function (req, res) {
    let { email, password } = req.body;
    console.log(email, password);
    res.redirect('/');
}

module.exports.getSignOutUser = function(req, res) {
    res.send('logout successful');
}

// "/developers" routes
module.exports.getSignUpDeveloper = function(req, res) {
    res.render('signup');
}
module.exports.postSignUpDeveloper = function(req, res) {
    let { fullname, email, password } = req.body;
    console.log(fullname, email, password);
    res.redirect('/');
}

module.exports.getSignInDeveloper = function(req, res) {
    res.render('signin');
}
module.exports.postSignInDeveloper = function(req, res) {
    let { email, password } = req.body;
    console.log(email, password);
    res.redirect('/');
}

module.exports.getSignOutDeveloper = function(req, res) {
    res.send('logout successful');
}
