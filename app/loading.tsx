/** Instant route-transition shell — shows while the next page chunk loads */
export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-white px-6 pt-10 md:px-10 md:pt-14" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="h-3 w-24 rounded-full bg-emerald-100" />
        <div className="mt-5 h-10 max-w-xl rounded-2xl bg-gray-100 md:h-12" />
        <div className="mt-4 h-4 max-w-lg rounded-full bg-gray-100" />
        <div className="mt-3 h-4 max-w-md rounded-full bg-gray-50" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-44 rounded-2xl bg-gray-50 ring-1 ring-gray-100" />
          <div className="h-44 rounded-2xl bg-gray-50 ring-1 ring-gray-100" />
          <div className="hidden h-44 rounded-2xl bg-gray-50 ring-1 ring-gray-100 lg:block" />
        </div>
      </div>
    </div>
  );
}
