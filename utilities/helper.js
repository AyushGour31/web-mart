const jwt = require('jsonwebtoken');

module.exports.generateToken = (account) => {
    return jwt.sign({ email: account.email, id: account._id }, process.env.JWT_KEY);
}
