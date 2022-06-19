const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tabunganSchema = new Schema({
    nama: {
        type: String,
        required: true,
        unique: true,
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