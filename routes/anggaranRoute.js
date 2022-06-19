const router = require('express').Router()
const anggaranController = require('../controller/anggaranHandler')

router.get('/', anggaranController.anggaranGetHandler)

router.patch('/', anggaranController.anggaranPatchHandler)

router.post('/', anggaranController.anggaranPostHandler)

router.delete('/', anggaranController.anggaranDeleteHandler)


module.exports = router