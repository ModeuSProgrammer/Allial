const express = require('express') // import express

const cors = require('cors')

const dotenv = require('dotenv')// file config
dotenv.config() // settings variables

const sequelize = require('./database/db.js') // add on DB
const models = require('./database/models.js') // add on 
const defaultData = require('./database/defaultData.js')

const router = require('./routes/index.js')

const app = express() // create express app
app.use(cors())// for send res=req on server
app.use(express.json()) // for send json 
app.use('/api', router)

const port = process.env.PORT || 5500

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await defaultData.createRole()
    await defaultData.CreateAdmin()
    await defaultData.AddBaseFood()
    app.listen(port, () => {
      console.log(`работаем на ${port}`)
    })
  }
  catch (e) {
    console.log(e)
  }
}

start()