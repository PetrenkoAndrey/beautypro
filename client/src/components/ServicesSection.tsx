const services = [
  {
    title: 'Нарощування вій',
    desc: 'Класика, 2D та об’єм — підбираємо вигляд під форму очей і ваш ритм життя.',
    price: '500 ₴',
  },
  {
    title: 'Корекція вій',
    desc: 'Акуратне оновлення через 2–3 тижні без навантаження на натуральні вії.',
    price: '350 ₴',
  },
  {
    title: 'Манікюр',
    desc: 'Апаратний або комбінований, з доглядом за кутикулою та формою.',
    price: 'від 550 ₴',
  },
  {
    title: 'Покриття гель-лаком',
    desc: 'Стійке покриття, рівна пластина та делікатні відтінки на вибір.',
    price: 'від 650 ₴',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Послуги
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Усе для догляду за поглядом і руками
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Працюємо на якісних матеріалах і дотримуємося санітарних норм — вам
            лишається розслабитися.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex flex-col rounded-2xl border border-cream-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-3 flex-1 text-ink-700">{s.desc}</p>
              <p className="mt-6 text-sm font-semibold text-rose-600">{s.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
