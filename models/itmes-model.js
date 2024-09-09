const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    itemname: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    whatnew: {
        type: String,
    },
    files: [
        {
            filename: {
                type: String,
                required: true,
            },
            fileurl: {
                type: String,
                required: true,
            },
        },
    ],
    developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'developer',
    },
}, {
    timestamps: true
})

const itemsModel = mongoose.model('item', itemsSchema);

module.exports = itemsModel;

