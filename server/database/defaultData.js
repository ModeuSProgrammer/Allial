const { Role, User, Drink, Dessert, First, Second } = require('./models')
const bcrypt = require('bcrypt')
const rolesAdd = [
  { ID: 1, title: 'user' },
  { ID: 2, title: 'cheif' },
  { ID: 3, title: 'admin' }
]

const FirstFood =
  [
    { ID: 1, title: 'Борщ', weight: '200' },
    { ID: 2, title: 'Грибной крем-суп', weight: '200' },
    { ID: 3, title: 'Куриный суп с лапшой', weight: '200' }
  ]
const SecondFood = [
  { ID: 1, title: 'Голубцы с мясом и рисом', weight: '200' },
  { ID: 2, title: 'Жареная картошка с грибами', weight: '200' },
  { ID: 3, title: 'Курица табака с овощами', weight: '200' }
]
const DrinkFood = [
  { ID: 1, title: 'Морс из клюквы', weight: '200' },
  { ID: 2, title: 'Кисель из ягод', weight: '200' },
  { ID: 3, title: 'Тархун', weight: '200' }
]
const DessertFood = [
  { ID: 1, title: 'Пирог "Пьяная вишня"', weight: '200' },
  { ID: 2, title: 'Медовик', weight: '200' },
  { ID: 3, title: 'Пирог "Наполеон"', weight: '200' }
]


const AdminPass = bcrypt.hashSync('root', 5)
const Admin = { email: 'root@root.ru', password: AdminPass, RoleID: 3 }


class defaultData {
  async createRole() {
    const searchRoles = await Role.findAll()
    if (searchRoles != 0) {
      return console.log('Roles add');
    }
    else {
      // Цикл что с элементом роль добавляет по записи из массива 
      for (const role of rolesAdd) {
        await Role.create(role)
      }
      return console.log('User, chief, admin add')
    }
  }

  async CreateAdmin() {
    const NoneAdmin = await User.findAll({ where: { RoleID: 3 } })
    if (NoneAdmin.length === 0) {
      await User.create(Admin)
      return console.log('Creating base Admin')
    }
    else {
      return console.log('There are Admin')
    }
  }

  async AddBaseFood() {
    if ((await First.findAll()).length === 0) {
      for (const eat of FirstFood) {
        await First.create(eat)
        console.log('First Add')
      }
    }
    if ((await Second.findAll()).length === 0) {
      for (const eat of SecondFood) {
        await Second.create(eat)
        console.log('Second Add')
      }
    }
    if ((await Drink.findAll()).length === 0) {
      for (const eat of DrinkFood) {
        await Drink.create(eat)
        console.log('Drink Add')
      }
    }
    if ((await Dessert.findAll()).length === 0) {
      for (const eat of DessertFood) {
        await Dessert.create(eat)
        console.log('Dessert Add')
      }
    }
    return console.log('Food ADD')
  }
}

module.exports = new defaultData()