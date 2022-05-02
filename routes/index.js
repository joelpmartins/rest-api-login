const express = require('express')
const router = express.Router()
const routes = {
    "login": require('./login.route'),
    "register": require('./register.route')
}

router.use('/login', routes.login)
router.use('/register', routes.register)

module.exports = router