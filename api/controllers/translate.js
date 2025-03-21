class TranslateController {
  constructor({ translateModel }) {
    this.translateModel = translateModel
  }

  translateText = async (req, res) => {
    const { from, to, text } = req.query

    if (!from || !to || !text) {
      return res.status(400).json({ message: 'Missing query params in request', error: true })
    }

    try {
      const translatedText = await this.translateModel.translateText({ text, from, to })

      if (translatedText.error) {
        return res.status(500).json({ message: translatedText.message, error: true })
      }

      res.json({ translatedText })
    } catch (error) {
      console.error('Controller error:', error)
      res.status(500).json({ message: 'Internal server error', error: true })
    }
  }

}

module.exports = { TranslateController }