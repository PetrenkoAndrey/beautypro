export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-ink-900">BeautyPro</p>
          <p className="mt-1 text-sm text-ink-700">Міні-салон краси · вії та манікюр</p>
        </div>
        <p className="text-sm text-ink-700">
          Сайт розроблено —{' '}
          <a
            href="https://t.me/andrey_petrenko27"
            className="text-rose-600 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @andrey_petrenko27
          </a>
        </p>
      </div>
    </footer>
  )
}
