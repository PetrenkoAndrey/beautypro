/**
 * Заглушка під Google OAuth (passport-google-oauth20 + сесії / JWT).
 * Після налаштування GOOGLE_CLIENT_ID / SECRET додайте маршрути:
 * GET /api/auth/google, GET /api/auth/google/callback
 * та збереження користувача в таблиці users з роллю ADMIN або TEACHER.
 */
export function authPlaceholder(_req, res) {
  res.status(501).json({
    error: 'Not implemented',
    hint: 'Налаштуйте Google OAuth та збереження users.role',
  })
}
