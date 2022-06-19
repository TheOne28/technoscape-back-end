const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kredensialSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    uniqueId:{
        type: String,
        required: true,
    },
    sessionId:{
        type: String,
        required: true,
    },
    otpToken: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});


const Kredensial = mongoose.model('Kredensial', kredensialSchema);

module.exports = Kredensial;