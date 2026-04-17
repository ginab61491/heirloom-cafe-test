import Link from "next/link";

export default function WinePage() {
  return (
    <div className="bg-[var(--color-cream)]">
      {/* Photo placeholder */}
      <div className="h-48 sm:h-72" style={{ background: 'linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-sage-dark) 50%, var(--color-parchment) 100%)' }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="gold-frame bg-[var(--color-warm-white)] relative text-center">
          <div className="gold-frame-inner absolute inset-0" />

          <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] mb-8 relative z-10">
            Wine
          </h1>

          <div className="flex flex-col gap-4 max-w-sm mx-auto relative z-10">
            <Link href="/dinner#wine" className="btn-gold">
              View our Wine List
            </Link>
            <Link href="/wine-club" className="btn-gold">
              Join our Wine Club
            </Link>
            <a href="mailto:stephen@heirloom-sf.com?subject=Mailing List" className="btn-gold">
              Join our Mailing List!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
