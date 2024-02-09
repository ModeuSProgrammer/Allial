const express = require('express') // import express

const sequelize = require('./database/db.js') // add on DB
const models = require('./database/models.js') // add on 
const dotenv = require('dotenv')// file config
dotenv.config() // settings variables

const app = express() // create express app
const port = process.env.PORT || 5500


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
      console.log(`работаем на ${port}`)
    })
  }
  catch (e) {
    console.log(e)
  }
}

start()