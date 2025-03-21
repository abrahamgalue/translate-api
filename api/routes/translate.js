const { Router } = require('express')
const path = require('path')
const { TranslateController } = require('../controllers/translate')

export function createRouter({ translateModel }) {
  const translateRouter = Router()

  const translateController = new TranslateController({ translateModel })

  translateRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'static', 'index.html')))
  translateRouter.get('/translate', translateController.translateText)

  return translateRouter
}
