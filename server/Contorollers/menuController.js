const { User, Menu, First, Second, Dessert, Drink } = require("../database/models");

class Menus {

  async AddFood(req, res, next) {
    try {
      if (req.user.RoleID !== 3) {
        return res.status(400).json({ message: 'Ошибка прав доступа' })
      }
      const { food, title, weight } = req.body
      const valuefood = Number(food)
      if (title.length === 0 || weight.length === 0) {
        return res.status(400).json({ message: 'Заполните все поля' })
      }
      switch (valuefood) {
        case 1: {
          await First.create({ title: title, weight: weight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 2: {
          await Second.create({ title: title, weight: weight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 3: {
          await Dessert.create({ title: title, weight: weight })
          return res.status(200).json({ message: `Блюдо добавленно ${title}` })
        }
        case 4: {
          await Drink.create({ title: title, weight: weight })
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
  async CreateMenu(req, res) {
    if (req.user.RoleID !== 2) {
      return res.status(400).json({ message: 'Ошибка прав доступа' })
    }

  }
}

module.exports = new Menus