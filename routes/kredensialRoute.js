const router = require('express').Router()
const kredensialController = require('../controller/kredensialHandler')

router.get('/kredensial', kredensialController.kredensialGetHandler)

router.post('/kredensial', kredensialController.kredensialPostHandler)



module.exports = router