const jwt = require('jsonwebtoken')

class Cheking {
  async VerifUser(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json({ messgae: 'Не авторизирован' })
      }
      const decoded = jwt.verify(token, process.env.secret_key)
      req.user = decoded
      next()
    }
    catch (err) {
      console.log(err)
      return res.status(403).json({ messgae: 'Не авторизирован' })
    }
  }
}
module.exports = new Cheking()