const Router = require('express')
const router = new Router()

const menuController = require('../Contorollers/menuController')
const AuthMiddleware = require('../middleware/authUsers')

router.post('/chief', AuthMiddleware.VerifUser,)
router.post('/addfood', AuthMiddleware.VerifUser, menuController.AddFood)


module.exports = router