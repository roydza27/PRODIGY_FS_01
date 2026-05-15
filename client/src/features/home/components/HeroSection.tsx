export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
            Secure Authentication System
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-100 md:text-5xl lg:text-6xl">
            Build secure login and registration flows with confidence.
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Learn how authentication works end to end with protected routes,
            password hashing, and role-based access control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/register"
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5"
            >
              Login
            </a>
          </div>
        </div>

        <div className="mt-14 w-full max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
            <img
              src="https://readymadeui.com/images/kpis-dashboard-img.webp"
              alt="Authentication dashboard preview"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}