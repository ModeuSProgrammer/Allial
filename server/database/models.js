const sequelize = require('./db.js')  // база данных
const { DataTypes } = require('sequelize') // для использование типов полей

const User = sequelize.define('User', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
},
  {
    timestamps: false,
  })

const Role = sequelize.define('Role', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true }
},
  {
    timestamps: false,
  })

const Menu = sequelize.define('Menu', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE },
  chef: { type: DataTypes.STRING },
},
  {
    timestamps: false
  })

const First = sequelize.define('First', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  weight: { type: DataTypes.STRING, }
},
  {
    timestamps: false
  })

const Second = sequelize.define('Second', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  weight: { type: DataTypes.STRING, }
},
  {
    timestamps: false
  })

const Dessert = sequelize.define('Dessert', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  weight: { type: DataTypes.STRING, }
},
  {
    timestamps: false
  })

const Drink = sequelize.define('Drink', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  weight: { type: DataTypes.STRING, }
},
  {
    timestamps: false
  })
const Comment = sequelize.define('Comment', {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE, },
},
  {
    timestamps: false
  })

Role.hasOne(User)
User.belongsTo(Role)

Menu.hasMany(User)
User.belongsTo(Menu)

First.hasOne(Menu)
Menu.belongsTo(First)

Second.hasOne(Menu)
Menu.belongsTo(Second)

Dessert.hasOne(Menu)
Menu.belongsTo(Dessert)

Drink.hasOne(Menu)
Menu.belongsTo(Drink)

Menu.hasMany(Comment)
Comment.belongsTo(Menu)

module.exports = {
  User, Role, Menu, Drink, Dessert, Comment, Second, First
}