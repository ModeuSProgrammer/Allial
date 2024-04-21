const jwt = require('jsonwebtoken')
const { User, Menu, First, Second, Dessert, Drink, Comment } = require("../database/models")
const { where } = require('sequelize')

class Menus {

  async AddFood(req, res, next) {
    try {
      const { roles, food, title, weight } = req.body
      if (roles !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      const valuefood = Number(food)
      const valueweight = Number(weight)
      if (title.length === 0 || valueweight.length === 0) {
        return res.status(400).json({ message: 'Заполните все поля' })
      }
      let allDataID
      switch (valuefood) {
        case 1: {
          allDataID = await First.findOne({ order: [['ID', 'DESC']] })
          const MaxID = allDataID.ID + 1
          await First.create({ ID: MaxID, title: title, weight: valueweight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 2: {
          allDataID = await Second.findOne({ order: [['ID', 'DESC']] })
          const MaxID = allDataID.ID + 1
          await Second.create({ ID: MaxID, title: title, weight: valueweight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 3: {
          allDataID = await Dessert.findOne({ order: [['ID', 'DESC']] })
          const MaxID = allDataID.ID + 1
          await Dessert.create({ ID: MaxID, title: title, weight: valueweight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 4: {
          allDataID = await Drink.findOne({ order: [['ID', 'DESC']] })
          const MaxID = allDataID.ID + 1
          await Drink.create({ ID: MaxID, title: title, weight: valueweight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        default: {
          return res.status(400).json({ message: 'Ошибка заполнения' })
        }
      }
    }
    catch (err) {
      return res.status(400).json({ message: 'Ошибка заполнения' })
    }
  }
  async postPossitionMenu(req, res) {
    const { roles, possition } = req.body
    let positionNames = null
    let possitionMenu = null
    const nubPoss = Number(possition)
    if (roles !== 2) {
      return res.status(400).json({ message: 'Ошибка прав доступа' })
    }
    switch (nubPoss) {
      case 1:
        possitionMenu = await First.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title)
        return res.status(200).json(positionNames)
      case 2:
        possitionMenu = await Second.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title)
        return res.status(200).json(positionNames)
      case 3:
        possitionMenu = await Drink.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title)
        return res.status(200).json(positionNames)
      case 4:
        possitionMenu = await Dessert.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title)
        return res.status(200).json(positionNames)
      default: return res.status(400).json({ message: 'Ошибка получения позиций меню' })
    }
  }

  async createMenu(req, res) {
    try {
      const { roles, emailChief, date, one, two, drink, dessert } = req.body
      if (roles !== 2) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      roles, emailChief, date, one, two, drink, dessert
      if (date.length === 0 || one.length === 0 || two.length === 0 || drink.length === 0 || dessert.length === 0) {
        return res.status(200).json({ message: 'Заполните все поля' })
      }

      const DayMenu = date
      const haveMenu = await Menu.findAll({ where: { date: DayMenu } })
      if (haveMenu.length != 0) {
        return res.status(200).json({ message: 'Меню на данный день уже есть' })
      }
      const UserCheif = await User.findOne({ where: { email: emailChief } })
      const firstData = await First.findOne({ where: { title: one } })
      const secondData = await Second.findOne({ where: { title: two } })
      const drinkData = await Drink.findOne({ where: { title: drink } })
      const dessertData = await Dessert.findOne({ where: { title: dessert } })

      const newMenu = await Menu.create({
        date: DayMenu, chief: UserCheif.ID, FirstID: firstData.ID,
        SecondID: secondData.ID, DessertID: dessertData.ID, DrinkID: drinkData.ID
      })
      return res.status(200).json({ message: 'Новое меню создано' })
    }
    catch (error) {
      return res.status(400).json({ message: 'Ошибка на сервере' + error })
    }
  }

  async GetMenuForUser(req, res) {
    try {
      let token = req.headers.authorization.split(' ')[1]
      if (token.length === undefined) {
        return res.status(200).json({ message: 'Меню на этот день нет' })
      }
      token = jwt.decode(token, process.env.secret_key)
      const date = new Date()
      const day = date.getDate()
      const mounth = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)
      const yaer = date.getFullYear()
      const DateMenu = yaer + '-' + mounth + '-' + day
      const haveMenu = await Menu.findOne({ where: { date: DateMenu } })
      if (haveMenu.length != 0) {
        const data = haveMenu.dataValues
        await User.update({ MenuID: data.ID }, { where: { ID: token.ID } })
        const one = await First.findOne({ where: { ID: data.FirstID } })
        const two = await Second.findOne({ where: { ID: data.SecondID } })
        const drink = await Drink.findOne({ where: { ID: data.DrinkID } })
        const dessert = await Dessert.findOne({ where: { ID: data.DessertID } })
        const menu = {
          date: DateMenu,
          First: one.title,
          Second: two.title,
          Dessert: drink.title,
          Drink: dessert.title
        }
        return res.status(200).json({ menu })
      }
      else {
        return res.status(200).json({ message: 'Меню на этот день нет' })
      }
    }
    catch (error) {
      return res.status(200)
    }
  }

  async GetMenuDayCalendar(req, res) {
    try {
      const DateMenu = req.query.date
      const haveMenu = await Menu.findOne({ where: { date: DateMenu } })
      if (haveMenu != undefined) {
        const data = haveMenu.dataValues
        const one = await First.findOne({ where: { ID: data.FirstID } })
        const two = await Second.findOne({ where: { ID: data.SecondID } })
        const drink = await Drink.findOne({ where: { ID: data.DrinkID } })
        const dessert = await Dessert.findOne({ where: { ID: data.DessertID } })
        const menuscalendar = {
          date: DateMenu,
          First: one.title,
          Second: two.title,
          Dessert: dessert.title,
          Drink: drink.title
        }
        return res.status(200).json(menuscalendar)
      }
      else {
        let menuscalendar = undefined
        return res.status(200).json(menuscalendar)
      }
    }
    catch (error) {
      let menuscalendar = undefined
      return res.status(200).json(menuscalendar)
    }
  }

  async DeleteMenu(req, res) {
    try {
      if (req.query.date === 'undefined') {
        return res.status(200).json({ message: 'На данный день нет меню' })
      }
      const dateDelString = req.query.date
      const dateDel = new Date(dateDelString)
      const menu = await Menu.findOne({ where: { date: dateDel } })
      if (menu.ID != 0) {
        const comDel = await Comment.findAll({ where: { MenuID: menu.ID } })
        console.log(comDel)
        await Comment.destroy({ where: { MenuID: menu.ID } })
        await menu.destroy()
        return res.status(200).json({ message: `Меню на ${dateDelString} было удалено` })
      }
      else {
        return res.status(200).json({ message: `Меню на ${dateDelString} не найдено` })
      }
    }
    catch (err) {
      return res.status(200).json({ message: 'Ошибка удаления на сервера' })
    }
  }


}

module.exports = new Menus