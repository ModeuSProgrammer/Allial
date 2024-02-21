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
      if (req.user.RoleID !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
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
    const VerifPass = await bcrypt.compareSync(password, user.password)
    if (VerifPass === true) {
      const token = generateJWT(user.email, user.RoleID)
      return res.json({ token })
    }
  }
  // cheking user in systems
  async Check(req, res) {
    const token = generateJWT(req.user.email, req.user.RoleID)
    return res.json({ token })
  }

  async Delete(req, res) {
    try {
      if (req.user.RoleID !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      const { emailTwo } = req.body
      if (emailTwo.length === 0) {
        return res.status(401).json({ message: 'Введите почту пользователя' })
      }
      const userDel = await User.findOne({ where: { email: emailTwo } }) || 0
      if (userDel === 0) {
        return res.status(401).json({ message: 'Такого пользователя нет' })
      }

      if (userDel.email == emailTwo) {
        await User.destroy({ where: { email: emailTwo } })
        return res.status(200).json({ message: `Пользователь ${emailTwo} был удален` })
      }
    }
    catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Ошибка удаления' })
    }
  }
}
module.exports = new UserController()