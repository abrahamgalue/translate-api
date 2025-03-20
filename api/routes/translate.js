const { Router } = require('express')
const { TranslateController } = require('../controllers/translate')

export function createRouter({ translateModel }) {
  const translateRouter = Router()

  const translateController = new TranslateController({ translateModel })

  translateRouter.get('/', (req, res) => res.send('Bienvenido al Traductor'))
  translateRouter.get('/translate', translateController.translateText)

  return translateRouter
}
