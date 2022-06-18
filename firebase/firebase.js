const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json')

//Setup firebase connection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

module.exports = admin