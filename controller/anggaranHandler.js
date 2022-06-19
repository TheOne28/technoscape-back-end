const Anggaran = require('../model/targetAnggaran.model')

const anggaranGetHandler = async function(req, res){
    const email = req.email

    try{
        const found = await anggaran.find({email: email})
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

const anggaranPostHandler = async function(req, res){
    const email = req.email
    const tujuan = req.body.tujuan
    const target = req.body.target
    const durasiJenis = req.body.durasiJenis
    const durasi = req.body.durasi

    if(nama.length === 0 || target.length === 0){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newAnggaran = Anggaran({
        email,
        tujuan,
        target,
        durasiJenis,
        durasi,
    })

    await newAnggaran.save().then((r) => {
        res.json({
            message: 'Success',
            data: newAnggaran
        }).status(200)
    }).catch((err) => {
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
    });

}

const anggaranPatchHandler = async function(req, res){
    const email = req.email
    const tujuan = req.body.tujuan
    const target = req.body.target
    const durasiJenis = req.body.durasiJenis
    const durasi = req.body.durasi

    if(!nama){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newAnggaran = Anggaran({
        email,
        tujuan,
        target,
        durasiJenis,
        durasi,
    })

    const found = anggaran.findOneAndUpdate({email: email, tujuan: tujuan}, newAnggaran)
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

const anggaranDeleteHandler = async function(req, res){
    const email = req.email
    const tujuan = req.body.tujuan

    if(!tujuan || tujuan.length === 0){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    try{
        await anggaran.deleteOne({
            email: email,
            tujuan: tujuan,
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
    anggaranDeleteHandler,
    anggaranGetHandler,
    anggaranPostHandler,
    anggaranPatchHandler
}
