const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: false

    },
    description: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Shop', shopSchema);