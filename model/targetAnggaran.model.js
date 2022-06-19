const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const durasiSchema = new Schema({
    jenis: {
        type: String,
        enum: ['hari', 'bulan', 'tahun'],
        default: 'hari',
        required: true,
    },
    durasi: {
        type: Number,
        required: true
    }
})

const targetAnggaranSchema = new Schema({
    tujuan: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true,
    },
    durasi: {
        type: durasiSchema,
        required: true,
    }

},{
    timestamps: true,
});


const TargetAnggaran = mongoose.model('TargetAnggaran', targetAnggaranSchema);

module.exports = TargetAnggaran;