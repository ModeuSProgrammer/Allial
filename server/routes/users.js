const Router = require('express')
const router = new Router()

const UserController = require('../Contorollers/userController')
const AuthMiddleware = require('../middleware/authUsers')

router.post('/adduser', UserController.Registration)
router.post('/auth', UserController.Auth)

router.post('/sendCom', AuthMiddleware.VerifUser, UserController.SendCommentUser)
router.post('/showCom', AuthMiddleware.VerifUser, UserController.ShowComments)

router.get('/check', AuthMiddleware.VerifUser, UserController.Check)

router.delete('/adduser', AuthMiddleware.VerifUser, UserController.Delete)


module.exports = router 