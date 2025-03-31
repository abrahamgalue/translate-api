const { generateTranslation } = require('./config.js')

class TranslateModel {
  static async translateText({ text, from, to }) {
    try {
      const result = await generateTranslation({ text, from, to })

      return result
    } catch (err) {
      return {
        message: 'An error occurred during translation',
        error: err,
      }
    }
  }
}

module.exports = { TranslateModel }
