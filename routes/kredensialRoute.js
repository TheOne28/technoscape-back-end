const router = require('express').Router()
const kredensialController = require('../controller/kredensialHandler')

router.get('/', kredensialController.kredensialGetHandler)

router.post('/', kredensialController.kredensialPostHandler)



module.exports = router