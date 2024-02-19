const { Role } = require('./models')

const rolesAdd = [
  { ID: 1, title: 'user' },
  { ID: 2, title: 'cheif' },
  { ID: 3, title: 'admin' }
]

class Roles {
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
}

module.exports = new Roles()