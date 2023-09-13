const express = require('express')
const router = express.Router()

const {sign_up, login} = require('../controllers/users')

router.route('/sign-up').post(sign_up)
router.route('/login').post(login)

module.exports = router