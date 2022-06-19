const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoKeuanganSchema = new Schema({
    deskripsi: {
        type: String, 
        default: ""
    },
    biaya: {
        type: Number,
        required : true,
    },
    tanggal: {
        type: String,
        required: true,
    },
    tipe: {
        type: String,
        enum: ['pendapatan', 'pengeluaran'],
        default: 'pengeluaran',
        required: true
    }

},{
    timestamps: true,
});


const InfoKeuangan = mongoose.model('InfoKeuangan', infoKeuanganSchema);

module.exports = InfoKeuangan;