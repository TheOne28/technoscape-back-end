const Keuangan = require('../controller/')
const { validate } = require('../model/tabungan.model')

function validateTipe(tipe){
    return tipe !== 'pengeluaran' || tipe !== 'pendapatan'
}

const keuanganGetHandler = async function(req, res){
    const email = req.email

    try{
        const found = await Keuangan.find({email: email})
        res.json({
            message: 'Success',
            data: found,
        }).status(200)
    }catch(e){
        res.json({
            message: 'Error',
            data: {}
        }).status(400)
    }
}

const keuanganPostHandler = async function(req, res){
    const email = req.email
    const deskripsi = req.body.deskripsi
    const biaya = req.body.biaya
    const tanggal = req.body.tanggal
    const tipe = req.body.tipe

    if(!validateTipe(tipe)){
        res.json({
            message: 'Error Request ', 
            data: {}
        }).status(400);
    }

    const newKeuangan = keuangan({
        email,
        deskripsi,
        biaya,
        tanggal,
        tipe,
    })

    await newKeuangan.save().then((r) => {
        res.json({
            message: 'Success',
            data: newKeuangan
        }).status(200)
    }).catch((err) => {
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
    });

}

const keuanganPatchHandler = async function(req, res){
    const email = req.email
    const deskripsi = req.body.deskripsi

    const tanggal = req.body.tanggal
    const tipe = req.body.tipe
    const biaya = req.body.biaya

    if(!validateTipe(tipe)){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const found = keuangan.findOne({email: email, deskripsi: deskripsi})

    if(found.size() === 0){
        res.json({
            message: 'Error Data Not Found',
            data: {},
        }).status(400)
        return
    }

    if(tanggal){
        found.tanggal = tanggal
    }

    if(tipe){
        found.tipe = tipe
    }

    if(biaya){
        found.biaya = biaya
    }

    await found.save().then((r) => {
        res.json({
            message: 'Success',
            data: found
        }).status(200)
    }).catch((err) => {
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
    });
}

const keuanganDeleteHandler = async function(req, res){
    const email = req.email
    const deskripsi = req.body.deskripsi

    try{
        await keuangan.deleteOne({
            email: email,
            deskripsi: deskripsi,
        }).then((r) =>{
            res.json({
                message: 'Success',
                data: {}
            }).status(200)
        }).catch((err) => {
            res.json({
                message: 'Error: ', e,
                data: {}
            }).status(400);
        })
        return 
    }catch(e){
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
        return
    }

}

module.exports = {
    keuanganDeleteHandler,
    keuanganGetHandler,
    keuanganPostHandler,
    keuanganPatchHandler
}
