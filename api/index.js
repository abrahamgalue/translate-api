const express = require('express');
const { createRouter } = require('./routes/translate')
const { TranslateModel } = require('./models/Gemini/translate');
const { corsMiddleware } = require('./middlewares/cors');

const app = express()
app.disable('x-powered-by')
app.use(corsMiddleware());

app.use('/api', createRouter({ translateModel: TranslateModel }))

module.exports = app