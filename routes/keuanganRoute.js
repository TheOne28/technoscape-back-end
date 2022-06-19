const router = require('express').Router()
const keuanganController = require('../controller/keuanganHandler')

router.get('/', keuanganController.keuanganGetHandler)

router.patch('/', keuanganController.keuanganPatchHandler)

router.post('/', keuanganController.keuanganPostHandler)

router.delete('/', keuanganController.keuanganDeleteHandler)


module.exports = router