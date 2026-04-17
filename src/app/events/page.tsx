export default function EventsPage() {
  return (
    <div className="bg-[var(--color-cream)]">
      {/* Interior photo placeholder */}
      <div className="h-48 sm:h-72" style={{ background: 'linear-gradient(135deg, var(--color-parchment) 0%, var(--color-terracotta) 30%, var(--color-charcoal) 100%)', opacity: 0.7 }} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="gold-frame bg-[var(--color-warm-white)] relative text-center">
          <div className="gold-frame-inner absolute inset-0" />

          <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] mb-6 relative z-10">
            Events
          </h1>

          <p className="text-[var(--color-warm-gray)] mb-6 relative z-10">
            Stay updated through our instagram:
          </p>

          <a
            href="https://www.instagram.com/heirloomcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block mb-10 relative z-10"
          >
            @heirloomcafe
          </a>

          {/* Instagram grid placeholder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm hover:opacity-80 transition-opacity cursor-pointer"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, var(--color-parchment) 0%, ${
                    ['var(--color-sage)', 'var(--color-terracotta)', 'var(--color-gold)', 'var(--color-wine)', 'var(--color-sage-dark)', 'var(--color-terracotta)'][i]
                  } 100%)`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
