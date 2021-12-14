import express, { Application } from 'express'

import { MongoClient } from './database/MongoClient'
import { router } from './routes'
import { PORT } from './config'

const port: string | number = PORT || 3000
const app: Application = express()

new MongoClient()

app.use(express.json())
app.use(router)

app.listen(port)
