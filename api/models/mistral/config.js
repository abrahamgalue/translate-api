const { Mistral } = require('@mistralai/mistralai')
const { MISTRAL_API_KEY, parts } = require('../config.js')

const client = new Mistral({ apiKey: MISTRAL_API_KEY })

const generateTranslation = async ({ text, from, to }) => {
  const result = await client.chat.complete({
    model: 'open-mistral-nemo',
    messages: [
      ...parts.map(part => ({ role: 'user', content: part.text })),
      {
        role: 'user',
        content: `${text} {{${from}}} [[${to}]]`,
      },
    ],
  })

  return result.choices[0].message.content
}

module.exports = { generateTranslation }