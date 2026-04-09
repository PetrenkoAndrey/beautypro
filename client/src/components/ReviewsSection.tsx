const reviews = [
  {
    name: 'Олена К.',
    text: 'Вії тримаються чудово, майстер все пояснила. Повернуся на корекцію без вагань.',
  },
  {
    name: 'Марія В.',
    text: 'Манікюр акуратний, колір як на зразку. Салон чистий і дуже приємний на вигляд.',
  },
  {
    name: 'Ірина П.',
    text: 'Записалася вперше через сайт — зручно. Чекала мене рівно о вибраний час.',
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-ink-900 py-20 text-cream-50 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
            Відгуки
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Нам довіряють
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-cream-100">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-rose-300">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
