const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, Menu, Comment } = require('../database/models')

// token for log in system and cheking
const generateJWT = (ID, email, RoleID) => {
  return jwt.sign(
    { ID, email, RoleID },
    process.env.secret_key,
    { expiresIn: '24h' }
  )
}

class UserController {
  // add new user in system
  async Registration(req, res) {
    try {
      const UserRole = req.body.RoleID
      if (UserRole !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      const { roles, email, password } = req.body
      const newRole = Number(roles)
      const hashPass = await bcrypt.hash(password, 5)
      const user = await User.create({ email: email, password: hashPass, RoleID: newRole })
      return res.status(200).json({ message: 'Новый пользователь создан' })
    }
    catch (err) {
      console.log('Ошибка' + err)
      return res.status(401).json({ message: 'Ошибка регистрации нового пользователя' })
    }
  }
  // log in system
  async Auth(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email: email } })
      if (user == null) {
        return res.status(200).json({ message: 'Данного пользователя не существует' });
      }
      const VerifPass = bcrypt.compareSync(password, user.password)
      if (VerifPass === true) {
        const token = generateJWT(user.ID, user.email, user.RoleID)
        return res.status(200).json({
          token, user: {
            ID: user.ID,
            email: user.email,
            RoleID: user.RoleID
          },
          message: 'Вы авторизированы'
        });
      }
      else {
        return res.status(200).json({
          message: 'Неправильный пароль или почта'
        });
      }
    }
    catch (e) {
      return res.status(200).json({ message: 'Ошибка почты или пароля' });
    }
  }
  // cheking user in systems
  async Check(req, res) {
    const token = generateJWT(req.user.ID, req.user.email, req.user.RoleID)
    return res.json({ token })
  }

  async Delete(req, res) {
    try {
      if (req.user.RoleID !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      const { email } = req.query
      console.log(email)
      if (email.length === 0) {
        return res.status(401).json({ message: 'Введите почту пользователя' })
      }
      const userDel = await User.findOne({ where: { email: email } }) || 0
      if (userDel === 0) {
        return res.status(401).json({ message: 'Такого пользователя нет' })
      }

      if (userDel.email == email) {
        await User.destroy({ where: { email: email } })
        return res.status(200).json({ message: `Пользователь ${email} был удален` })
      }
    }
    catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Ошибка удаления' })
    }
  }
  async SendCommentUser(req, res) {
    try {
      const { date, text } = req.body
      const dateMenuCheck = await Menu.findOne({ where: { date: date } })
      if (dateMenuCheck != undefined) {
        const MID = dateMenuCheck.ID
        await Comment.create({ text: text, date: date, MenuID: MID })
        return res.status(200).json({ message: 'Спасибо за ваш отзыв!' })

      }
      if (dateMenuCheck == undefined) {
        return res.status(200).json({ message: 'Нельзя оставить отзыв на этот день!' })
      }
    }
    catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Ошибка отправки' })
    }
  }

  async ShowComments(req, res) {
    try {
      const stringDate = req.body.date
      const normalDate = new Date(stringDate)
      const comments = await Comment.findAll({ where: { date: normalDate }, attributes: ['ID', 'text'] })
      return res.status(200).json(comments)
    }
    catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Ошибка на сервере' })
    }
  }
  async DeleteComment(req, res) {
    try {
      const IDcomment = req.query.IDcomment
      const delCom = await Comment.findByPk(IDcomment)
      await delCom.destroy()
      await delCom.save()
      const checking = await Comment.findByPk(IDcomment)
      if (checking === null)
        return res.status(200).json({ message: 'Комментарий был удален' })
      else {
        return res.status(200).json({ message: 'Ошибка удаления комментария' })
      }
    }
    catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Ошибка на сервере' })
    }
  }

}
module.exports = new UserController()