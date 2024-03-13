const Router = require('express')
const router = new Router()

const menuController = require('../Contorollers/menuController')
const AuthMiddleware = require('../middleware/authUsers')

router.post('/chief', AuthMiddleware.VerifUser,)
router.post('/addfood', AuthMiddleware.VerifUser, menuController.AddFood)
router.post('/possitionMenu', AuthMiddleware.VerifUser, menuController.postPossitionMenu)
router.post('/create', AuthMiddleware.VerifUser, menuController.createMenu)


module.exports = router