const nav = [
  { href: '#services', label: 'Послуги' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#about', label: 'Про нас' },
  { href: '#reviews', label: 'Відгуки' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl"
        >
          BeautyPro
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Головна навігація">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition hover:text-rose-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          className="rounded-full bg-ink-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-rose-600"
        >
          Записатися
        </a>
      </div>
    </header>
  )
}
