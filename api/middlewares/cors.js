import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'https://google-translate-clone-abrahamgalue.netlify.app/'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.indexOf(origin) !== -1) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}
)