class TranslateController {
  constructor({ translateModel }) {
    this.translateModel = translateModel
  }

  translateText = async (req, res) => {
    const { from, to, text } = req.query;

    if (!from | !to | !text) return res.status(400).json({ message: 'Missing query params in request', error: true })

    const translatedText = await this.translateModel.translateText({ text, from, to })

    res.json({ translatedText });
  }
}

module.exports = { TranslateController }