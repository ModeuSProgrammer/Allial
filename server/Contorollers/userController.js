const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../database/models')

// token for log in system and cheking
const generateJWT = (email, RoleID) => {
  return jwt.sign(
    { email, RoleID },
    process.env.secret_key,
    { expiresIn: '24h' }
  )
}
class UserController {
  // add new user in system
  async Registration(req, res) {
    try {
      const { roles, email, password } = req.body
      const hashPass = await bcrypt.hash(password, 5)
      const user = await User.create({ email: email, password: hashPass, RoleID: roles })
      const token = generateJWT(user.email, user.RoleID)
      return res.json({ token })
    }
    catch (err) {
      return console.log('Ошибка' + err)
    }
  }
  // log in system
  async Auth(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    const VerifPass = bcrypt.compareSync(password, user.password)
    const token = generateJWT(user.email, user.RoleID)
    return res.json({ token })
  }
  // cheking user in systems
  async Check(req, res) {
    const token = generateJWT(req.user.email, req.user.RoleID)
    return res.json({ token })
  }

}
module.exports = new UserController()