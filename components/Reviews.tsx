export default function Reviews() {
  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <p className="mt-2 text-slate-600">Placeholder reviews section.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border p-6">
              <div className="text-sm text-slate-600">
                “Placeholder review.”
              </div>
              <div className="mt-4 text-sm font-medium">— Name</div>
              <div className="text-xs text-slate-500">Company</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
