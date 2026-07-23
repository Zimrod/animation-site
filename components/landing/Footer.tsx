// components/landing/Footer.tsx

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 py-16 px-6 overflow-hidden">
      {/* background noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.35em] text-zinc-500 mb-4">
              Journey 18 Miles
            </div>

            <h3 className="text-3xl font-black tracking-tight mb-4">
              AI Explainer Videos
              <br />
              Generated From Scripts.
            </h3>

            <p className="max-w-xl text-zinc-400 leading-relaxed">
              Build professional explainer videos in minutes using
              typography systems, animated widgets, charts and
              reusable motion components.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider mb-4">
              Product
            </div>

            <div className="flex flex-col gap-3 text-zinc-400 text-sm">
              <a href="/" className="hover:text-black transition">
                Home
              </a>

              <a href="#widgets" className="hover:text-black transition">
                Widget Library
              </a>

              <a href="#pricing" className="hover:text-black transition">
                Pricing
              </a>

              <a href="#roadmap" className="hover:text-black transition">
                Roadmap
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </div>

            <div className="flex flex-col gap-3 text-zinc-400 text-sm">
              <a
                href="mailto:admin@journey18miles.com"
                className="hover:text-black transition"
              >
                admin@journey18miles.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            © {new Date().getFullYear()} Journey 18 Miles
          </div>

          <div className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Founding Beta • Text Widgets First
          </div>
        </div>
      </div>
    </footer>
  );
}