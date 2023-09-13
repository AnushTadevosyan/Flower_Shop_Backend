const express = require('express')
const router = express.Router()

const {getAllBouquets,createBouquet} = require('../controllers/bouquet')

router.route('/').get(getAllBouquets).post(createBouquet)

module.exports = router