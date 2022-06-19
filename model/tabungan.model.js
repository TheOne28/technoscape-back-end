const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tabunganSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required:true,
    },
    uangSekarang: {
        type: Number,
        require: true
    }
},{
    timestamps: true,
});


const Tabungan = mongoose.model('Tabungan', tabunganSchema);

module.exports = Tabungan;