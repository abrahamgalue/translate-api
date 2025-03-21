const express = require('express')
const { createRouter } = require('./routes/translate')
const { TranslateModel } = require('./models/Gemini/translate')
// const { corsMiddleware } = require('./middlewares/cors')
const cors = require('cors')

const app = express()
app.disable('x-powered-by')
app.use(cors())

app.get('/', (req, res) => res.sendFile(process.cwd() + '/api/static/index.html'))
app.use('/api', createRouter({ translateModel: TranslateModel }))
app.use((req, res, next) => res.status(404).sendFile(process.cwd() + '/api/static/404.html'))

module.exports = app