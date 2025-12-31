export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold text-xl tracking-tight">ThreatZero</div>
          <nav className="flex gap-5 text-sm">
            <a className="hover:underline" href="#home">Home</a>
            <a className="hover:underline" href="#services">Services</a>
            <a className="hover:underline" href="#pricing">Plans</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-semibold leading-tight">
          Find potential risks and exposures <span className="underline">before attackers do</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          ThreatZero is an automated security scanning platform for websites and internet-facing assets.
          Fast signals, clear reports, and a simple way to track your exposure over time.
        </p>

        <div className="mt-10 rounded-2xl border p-6 shadow-sm max-w-3xl">
          <div className="text-sm font-medium text-slate-700">
            100% Free Web Scan with Instant Results
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              className="w-full rounded-xl border px-4 py-3 text-slate-900"
              placeholder="https://example.com"
            />
            <button className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-50">
              Scan
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            By conducting scans you agree to our <span className="underline">Terms</span>.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-10 border-t">
        <h2 className="text-2xl font-semibold">Ongoing Monitoring and Reports</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Get monthly scans, alerts on critical findings, and clear reporting you can act on.
        </p>

        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border p-5">
            <div className="font-medium">Monitoring</div>
            <div className="mt-2 text-sm text-slate-600">
              Scheduled recurring scans of your assets.
            </div>
          </li>
          <li className="rounded-2xl border p-5">
            <div className="font-medium">Reports</div>
            <div className="mt-2 text-sm text-slate-600">
              Prioritized findings with remediation steps.
            </div>
          </li>
          <li className="rounded-2xl border p-5">
            <div className="font-medium">Visibility</div>
            <div className="mt-2 text-sm text-slate-600">
              Track changes and reduce attack surface.
            </div>
          </li>
        </ul>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-10 border-t">
        <h2 className="text-2xl font-semibold">Plans</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <div className="font-medium">Starter</div>
            <div className="mt-2 text-slate-600 text-sm">1 website • monthly scan</div>
            <div className="mt-4 text-2xl font-semibold">
              €49 <span className="text-sm font-normal text-slate-500">/mo</span>
            </div>
            <button className="mt-5 w-full rounded-xl border px-4 py-3 hover:bg-slate-50">
              Select plan
            </button>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="font-medium">Business</div>
            <div className="mt-2 text-slate-600 text-sm">1 website + 1 IP • monthly scan</div>
            <div className="mt-4 text-2xl font-semibold">
              €149 <span className="text-sm font-normal text-slate-500">/mo</span>
            </div>
            <button className="mt-5 w-full rounded-xl border px-4 py-3 hover:bg-slate-50">
              Select plan
            </button>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="font-medium">Pro</div>
            <div className="mt-2 text-slate-600 text-sm">More assets • alerts • support</div>
            <div className="mt-4 text-2xl font-semibold">
              €299 <span className="text-sm font-normal text-slate-500">/mo</span>
            </div>
            <button className="mt-5 w-full rounded-xl border px-4 py-3 hover:bg-slate-50">
              Select plan
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-10 border-t">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-slate-600">
          Pre-launch: contact coming soon.
        </p>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>Netherlands-based • Automated security scanning</div>
          <div>© {new Date().getFullYear()} ThreatZero</div>
        </div>
      </footer>
    </main>
  );
}
