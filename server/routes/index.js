const Router = require('express')
const router = new Router()

const userRouter = require('./users')

router.use('/', userRouter)

module.exports = router