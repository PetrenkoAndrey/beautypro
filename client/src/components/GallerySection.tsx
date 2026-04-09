const images = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    alt: 'Догляд за нігтями та гель-лак',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    alt: 'Макіяж та акцент на очах',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    alt: "Інтер'єр салону краси",
  },
  {
    src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80',
    alt: 'Деталі робочого місця майстра',
  },
  {
    src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    alt: 'Косметика та інструменти',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    alt: 'Процедура догляду',
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 border-y border-cream-200 bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
              Галерея
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Атмосфера та роботи
            </h2>
          </div>
          <p className="max-w-md text-ink-700">
            Чисті лінії, тепле світло та затишні деталі інтер’єру — мінімалізм і природні
            текстури.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.src}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                width={400}
                height={300}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
