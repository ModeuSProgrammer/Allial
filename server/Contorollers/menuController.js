const { _attributes } = require("../database/db");
const { User, Menu, First, Second, Dessert, Drink } = require("../database/models");

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
        positionNames = possitionMenu.map(position => position.title);
        return res.status(200).json(positionNames)
      case 2:
        possitionMenu = await Second.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title);
        return res.status(200).json(positionNames)
      case 3:
        possitionMenu = await Drink.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title);
        return res.status(200).json(positionNames)
      case 4:
        possitionMenu = await Dessert.findAll({ attributes: ['title'] })
        positionNames = possitionMenu.map(position => position.title);
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

      if (date.length || one.length || two.length || drink.length || dessert.length === 0) {
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
}

module.exports = new Menus