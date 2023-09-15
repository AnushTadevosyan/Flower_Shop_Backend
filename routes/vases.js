const express = require('express')
const router = express.Router()

const {getAllVases,createVases} = require('../controllers/vases')

router.route('/').get(getAllVases).post(createVases)

module.exports = router