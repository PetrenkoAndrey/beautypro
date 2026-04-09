import { useEffect, useState } from 'react'

type SalonInfo = {
  phone: string
  address: string
  hours: string
}

export function BookingSection() {
  const [info, setInfo] = useState<SalonInfo | null>(null)

  useEffect(() => {
    fetch('/api/salon')
      .then((r) => (r.ok ? r.json() : null))
      .then((data: SalonInfo | null) => setInfo(data))
      .catch(() => setInfo(null))
  }, [])

  const phone = info?.phone ?? '+380961345475'
  const address = info?.address ?? 'м.Нікополь, проспект Трубників 75'
  const hours = info?.hours ?? 'Пн–Сб 10:00 — 18:00, Нд вихідний'

  return (
    <section id="booking" className="scroll-mt-24 bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-ink-800 px-8 py-14 text-cream-50 shadow-2xl sm:px-14 sm:py-16 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
                Запис
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Оберіть зручний час
              </h2>
              <p className="mt-4 text-lg text-cream-200/90">
                Напишіть нам у месенджер або зателефонуйте — підтвердимо візит і
                підкажемо тривалість процедур.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6 border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/90">
                  Телефон
                </p>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="mt-1 block text-xl font-semibold hover:text-rose-300">
                  {phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/90">
                  Адреса
                </p>
                <p className="mt-1 text-lg">{address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/90">
                  Графік
                </p>
                <p className="mt-1 text-lg">{hours}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://t.me/julia_petrenko91"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
                >
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/julchik_petrenko"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
