const express = require('express')
const path = require('path')
const cors = require('cors')

// const { corsMiddleware } = require('./middlewares/cors')
const { createRouter } = require('./routes/translate')
const { TranslateModel } = require('./models/gemini/translate')

const app = express()
app.disable('x-powered-by')
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static', 'index.html')))
app.use('/api', createRouter({ translateModel: TranslateModel }))
app.use((req, res, next) => res.status(404).sendFile(path.join(__dirname, 'static', '404.html')))

module.exports = app