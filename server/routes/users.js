const Router = require('express')
const router = new Router()

const userController = require('../Contorollers/userController')

router.get('/user', userController)
