const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const targetAnggaranSchema = new Schema({
    email:{
        type: String,
        require: true,
    },
    tujuan: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true,
    },
    durasiJenis: {
        type: String,
        enum: ['hari', 'bulan', 'tahun'],
        default: 'hari',
        required: true,
    },
    durasi: {
        type: Number,
        required: true
    }

},{
    timestamps: true,
});


const TargetAnggaran = mongoose.model('TargetAnggaran', targetAnggaranSchema);

module.exports = TargetAnggaran;