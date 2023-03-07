const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const auth= require('./middlewares/auth')
const routerApi = require('./routes/api')
const authRouter =require('./routes/api/auth')
const contactsRouter = require('./routes/api/contacts')

const app = express()
require('./config/config-passport')


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

require('./config/config-passport')
// app.use('/api/contacts',  contactsRouter)
app.use('/api/auth', authRouter)

app.use('/api/contacts', auth, contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
