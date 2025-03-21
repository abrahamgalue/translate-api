const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai')
const { GEMINI_API_KEY, parts } = require('../config.js')

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
]

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-lite',
  safetySettings,
})

const generationConfig = {
  temperature: 0,
  topP: 0.8,
  topK: 40,
  maxOutputTokens: 100,
  responseMimeType: 'text/plain',
}

const generateTranslation = async ({ text, from, to }) => {
  const result = await model.generateContent({
    contents: [
      {
        role: 'user',
        parts: [
          ...parts,
          {
            text: `user_prompt: ${text} {{${from}}} [[${to}]]`,
          },
        ],
      },
    ],
    generationConfig,
  })

  return result.response.text()
}

module.exports = { generateTranslation }