const Keuangan = require('../model/infoKeuangan.model')

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

    const newKeuangan = Keuangan({
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


    console.log(typeof email)
    console.log(deskripsi)

    if(!validateTipe(tipe)){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newKeuangan = {
        email: email,
        deskripsi: deskripsi,
        tanggal: tanggal,
        tipe: tipe,
        biaya: biaya
    }

    const found = Keuangan.findOneAndUpdate({email: email, deskripsi: deskripsi}, newKeuangan)
    .then((r) => {
        res.json({
            message: 'Success',
            data: found
        }).status(200)
    }).catch((err) => {
        res.json({
            message: `Error: ${err} `,
            data: {}
        }).status(400);
    });


}

const keuanganDeleteHandler = async function(req, res){
    const email = req.email
    const deskripsi = req.body.deskripsi

    try{
        await Keuangan.deleteOne({
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
