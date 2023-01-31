const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Shop', shopSchema);