import express, { Application } from 'express'

import { MongoClient } from './database/MongoClient'
import { router } from './routes'

const app: Application = express()

new MongoClient()

app.use(express.json())
app.use(router)

export { app }
