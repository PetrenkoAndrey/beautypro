export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[5/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&q=80"
              alt="Затишний інтер'єр міні-салону"
              className="h-full w-full object-cover"
              width={700}
              height={560}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Про нас
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Маленький салон — велика увага до вас
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            «BeautyPro» — це міні-студія для тих, хто цінує тишу, індивідуальний підхід
            і охайний результат. Ми поєднуємо досвід майстрів із сучасними техніками
            нарощування вій та манікюру.
          </p>
          <ul className="mt-8 space-y-4 text-ink-700">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              Сертифіковані матеріали та одноразові витратні матеріали
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              Зручне онлайн-бронювання та нагадування про візит
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              Локація поруч із зупинкою транспорту
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
