import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { authPlaceholder } from './controllers/authController.js'
import { getHealth } from './controllers/healthController.js'
import { getSalonPublic } from './controllers/salonController.js'
import { openDb } from './db.js'

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors({ origin: true }))
app.use(express.json())

const db = openDb()

app.get('/api/health', (_req, res) => {
  res.json(getHealth())
})

app.get('/api/salon', (_req, res) => {
  res.json(getSalonPublic(db))
})

app.get('/api/auth/google', authPlaceholder)

app.listen(PORT, () => {
  console.log(`API http://localhost:${PORT}`)
})
