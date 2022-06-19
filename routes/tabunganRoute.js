const router = require('express').Router()
const tabungan_controller = require('../controller/tabunganHandler')

router.get('/', tabungan_controller.tabunganGetHandler)

router.patch('/', tabungan_controller.tabunganPatchHandler)

router.post('/', tabungan_controller.tabunganPostHandler)

router.delete('/', tabungan_controller.tabunganDeleteHandler)


module.exports = router