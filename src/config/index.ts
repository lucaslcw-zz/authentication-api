import dotenv from 'dotenv'

dotenv.config()

export const {
  JWT_PASS,
  MONGO_URL,
  PORT
} = process.env
