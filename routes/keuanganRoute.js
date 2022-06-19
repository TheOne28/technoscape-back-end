const router = require('express').Router()
const keuanganController = require('../controller/keuanganHandler')

router.get('/keuangan', keuanganController.keuanganGetHandler)

router.patch('/keuangan', keuanganController.keuanganPatchHandler)

router.post('/keuangan', keuanganController.keuanganPostHandler)

router.delete('/keuangan', keuanganController.keuanganDeleteHandler)


module.exports = router