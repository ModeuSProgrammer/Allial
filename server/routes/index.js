const Router = require('express')
const router = new Router()

const userRouter = require('./users')
const menuRouter = require('./menu')

router.use('/', userRouter)
router.use('/', menuRouter)

module.exports = router
