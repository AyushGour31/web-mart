const mongoose = require('mongoose');

const developerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item',
        },
    ],
}, {
    timestamps: true
})

const developerModel = mongoose.model('developer', developerSchema);

module.exports = developerModel;
