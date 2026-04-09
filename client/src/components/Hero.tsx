const heroImage =
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&q=80'

export function Hero() {
  return (
    <section className="border-b border-cream-200 bg-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Міні-салон краси
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Вії та манікюр з турботою про деталі
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
            Затишний простір у центрі міста: делікатне нарощування вій, акуратний
            манікюр і гель-лак — усе для того, щоб ви почувалися впевнено щодня.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-ink-800"
            >
              Обрати час
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-ink-800/15 bg-white px-8 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-rose-500/40 hover:text-rose-600"
            >
              Переглянути послуги
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-ink-900/10 ring-1 ring-black/5">
            <img
              src={heroImage}
              alt="Робоче місце майстра з манікюру в світлому інтер'єрі салону"
              className="h-full w-full object-cover"
              width={600}
              height={750}
            />
          </div>
          <div className="absolute -bottom-6 -left-4 max-w-[220px] rounded-xl border border-cream-200 bg-white p-4 shadow-lg sm:-left-6">
            <p className="font-display text-2xl font-semibold text-ink-900">4.9</p>
            <p className="text-sm text-ink-700">середня оцінка від гостей салону</p>
          </div>
        </div>
      </div>
    </section>
  )
}
