const router = require('express').Router()
const tabungan_controller = require('../controller/tabunganHandler')

router.get('/tabungan', tabungan_controller.tabunganGetHandler)

router.patch('/tabungan', tabungan_controller.tabunganPatchHandler)

router.post('/tabungan', tabungan_controller.tabunganPostHandler)

router.delete('/tabungan', tabungan_controller.tabunganDeleteHandler)


module.exports = router