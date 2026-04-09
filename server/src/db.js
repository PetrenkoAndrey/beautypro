import Database from 'better-sqlite3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = process.env.SQLITE_PATH || path.join(__dirname, '..', 'data', 'salon.db')

export function openDb() {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  const db = new Database(dbPath)
  db.pragma('journal_mode = WAL')

  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      google_id TEXT UNIQUE NOT NULL,
      email TEXT NOT NULL,
      name TEXT,
      role TEXT NOT NULL CHECK(role IN ('ADMIN', 'TEACHER')),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)

  const salonDefaults = [
    ['phone', '+380961345475'],
    ['address', 'м.Нікополь, проспект Трубників 75'],
    ['hours', 'Пн–Сб 10:00 — 18:00, Нд вихідний'],
  ]
  const upsert = db.prepare(
    'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'
  )
  for (const [key, value] of salonDefaults) {
    upsert.run(key, value)
  }

  return db
}
