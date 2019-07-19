const mongoose = require('mongoose')
require('dotenv').config()

var connection = 'mongodb://0.0.0.0:27017'
const dbname = process.env.DB_NAME || 'task-manager-api'

if(process.env.PRODUCTION === "true") {
    const user = process.env.DB_USER
    const pass = process.env.DB_PASS
    const host = process.env.DB_HOST || connection
    connection = `mongodb+srv://${user}:${pass}@${host}`
}

mongoose.connect(`${connection}/${dbname}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})