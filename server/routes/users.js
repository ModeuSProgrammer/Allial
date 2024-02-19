const Router = require('express')
const router = new Router()

const UserController = require('../Contorollers/userController')

router.post('/adduser', UserController.Registration)
router.get('/auth', UserController.Auth)


module.exports = router