const Kredensial = require('../model/kredensial.model')

const kredensialGetHandler = async function(req, res){
    const email = req.email

    try{
        const found = await Kredensial.find({email: email})
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

const kredensialPostHandler = async function(req, res){
    const email = req.email
    const username = req.body.username
    const uniqueId = req.body.uniqueId
    const sessionId = req.body.sessionId
    const otpToken = req.body.otpToken

    if(nama.length === 0 || target.length === 0){
        res.json({
            message: 'Error Request',
            data: {},
        }).status(400)
        return
    }

    const newKredensial = Kredensial({
        email,
        username,
        uniqueId,
        sessionId,
        otpToken,
    })

    await newKredensial.save().then((r) => {
        res.json({
            message: 'Success',
            data: newKredensial
        }).status(200)
    }).catch((err) => {
        res.json({
            message: 'Error: ', e,
            data: {}
        }).status(400);
    });
}

module.exports = {
    kredensialGetHandler,
    kredensialPostHandler,
}



