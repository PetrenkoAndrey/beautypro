/**
 * Після підключення Google OAuth сюди передавати роль з сесії / JWT.
 * Зараз заглушка: адмін-ендпоінти можна вмикати пізніше.
 */
export function requireRole(...allowed) {
  return (req, res, next) => {
    const role = req.user?.role
    if (!role || !allowed.includes(role)) {
      return res.status(403).json({ error: 'Forbidden' })
    }
    next()
  }
}
