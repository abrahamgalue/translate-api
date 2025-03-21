const { Router } = require('express')
const { TranslateController } = require('../controllers/translate')

export function createRouter({ translateModel }) {
  const translateRouter = Router()

  const translateController = new TranslateController({ translateModel })

  translateRouter.get('/', (req, res) => res.sendFile(process.cwd() + '/api/static/index.html'))
  translateRouter.get('/translate', translateController.translateText)

  return translateRouter
}
