const express = require('express')
const router = express.Router()

const {getAllSignitureBoxes,createSignitureBox} = require('../controllers/signiture_boxes')

router.route('/').get(getAllSignitureBoxes).post(createSignitureBox)

module.exports = router