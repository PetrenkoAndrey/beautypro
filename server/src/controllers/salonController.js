/**
 * Публічні дані салону для лендінгу.
 * @param {import('better-sqlite3').Database} db
 */
export function getSalonPublic(db) {
  const rows = db.prepare('SELECT key, value FROM settings').all()
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]))
  return {
    phone: map.phone ?? '',
    address: map.address ?? '',
    hours: map.hours ?? '',
  }
}
