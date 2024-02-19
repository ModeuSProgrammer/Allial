const express = require('express') // import express
const dotenv = require('dotenv')// file config
dotenv.config() // settings variables

const sequelize = require('./database/db.js') // add on DB
const models = require('./database/models.js') // add on 
const roles = require('./database/roles.js')

const router = require('./routes/index.js')

const app = express() // create express app
app.use(express.json()) // for send json 
app.use('/api', router)

const port = process.env.PORT || 5500

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await roles.createRole()
    app.listen(port, () => {
      console.log(`работаем на ${port}`)
    })
  }
  catch (e) {
    console.log(e)
  }
}

start()