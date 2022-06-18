const admin = require('../firebase/firebase');

const authentication = async function(req, res, next){
    const token = req.headers.authorization.split(' ')[1]
    try{
        const decoded = admin.auth().verifyIdToken(token)

        if(decoded){
            req.email = (await decoded).email
            return next()
        }
        return res.json({message: 'Unauthorize user'})

    }catch(e){
        return res.json({message: 'Internal firebase error'})
    }
}

module.exports = authentication