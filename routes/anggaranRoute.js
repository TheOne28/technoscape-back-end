const router = require('express').Router()
const anggaranController = require('../controller/anggaranHandler')

router.get('/anggaran', anggaranController.anggaranGetHandler)

router.patch('/anggaran', anggaranController.anggaranPatchHandler)

router.post('/anggaran', anggaranController.anggaranPostHandler)

router.delete('/anggaran', anggaranController.anggaranDeleteHandler)


module.exports = router