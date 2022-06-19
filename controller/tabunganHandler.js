const Tabungan = require('../model/tabungan.model')

const tabunganGetHandler = async function(req, res){
    const email = req.email

    try{
        const found = await Tabungan.find({email: email})
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

const tabunganPostHandler = async function(req, res){
    const email = req.email
    const nama = req.body.nama
    const target = req.body.target
    const uangSekarang = req.body.uangSekarang

    if(nama.length === 0 || target.length === 0){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newTabungan = Tabungan({
        email,
        nama,
        target,
        uangSekarang,
    })

    await newTabungan.save().then((r) => {
        res.json({
            message: 'Success',
            data: newTabungan
        }).status(200)
    }).catch((err) => {
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
    });

}

const tabunganPatchHandler = async function(req, res){
    const email = req.email
    const nama = req.body.nama
    const target = req.body.target
    const uangSekarang = req.body.uangSekarang

    if(!nama){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newTabungan = Tabungan({
        email,
        nama,
        target,
        uangSekarang,
    })

    const found = Tabungan.findOneandUpdate({email: email, nama: nama}, newTabungan)
    .then((r) => {
        res.json({
            message: 'Success',
            data: found
        }).status(200)
    }).catch((err) => {
        res.json({
            message: `Error: ${err}`,
            data: {}
        }).status(400);
    });
}

const tabunganDeleteHandler = async function(req, res){
    const email = req.email
    const nama = req.body.nama

    if(!nama || nama.length === 0){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    try{
        await Tabungan.deleteOne({
            email: email,
            nama: nama,
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
    tabunganDeleteHandler,
    tabunganGetHandler,
    tabunganPostHandler,
    tabunganPatchHandler
}



