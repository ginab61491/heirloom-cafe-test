export default function AboutPage() {
  return (
    <div className="bg-[var(--color-cream)]">
      {/* Top section: side by side */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Image placeholder */}
          <div className="rounded-lg h-80 md:h-full min-h-[320px]" style={{ background: 'linear-gradient(135deg, var(--color-parchment) 0%, var(--color-sage) 100%)' }} />

          {/* About copy */}
          <div>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)] mb-6">
              Heirloom Caf&eacute;
            </h1>
            <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed text-[15px]">
              <p>Heirloom Caf&eacute; was founded with two concurrent ambitions: to offer a wide variety of aged wines from a carefully managed cellar, and to serve simple, very well-prepared food at reasonable prices.</p>
              <p>Our wine cellar and our love of mature wines are the foundation of our restaurant. We have been actively identifying and sourcing wines from our favorite producers in California and regions all over Europe for many years.</p>
              <p>The kitchen is dedicated to offering a menu which is concise, seasonal, highly selective, and exceedingly tasteful. We are not any more interested in working with harder-to-find, esoteric ingredients than we are in working with very good carrots and onions.</p>
            </div>
          </div>
        </div>

        {/* Team photo placeholder */}
        <div className="rounded-lg h-64 mb-10" style={{ background: 'linear-gradient(90deg, var(--color-parchment) 0%, var(--color-terracotta) 50%, var(--color-parchment) 100%)', opacity: 0.6 }} />

        {/* Team bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-3">Stephen Hallenbeck</h2>
            <p className="text-[var(--color-warm-gray)] leading-relaxed text-[15px]">
              Wine director and co-founder. Stephen has spent years building the cellar that defines Heirloom, sourcing aged wines from California and Europe that he believes over-deliver for their price. His wine classes and Saturday tastings have become a cornerstone of the restaurant&apos;s community.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-3">Amy Siemers</h2>
            <p className="text-[var(--color-warm-gray)] leading-relaxed text-[15px]">
              Chef and co-founder. Amy&apos;s cooking at Heirloom reflects a deep commitment to seasonality and simplicity. Her plates maximize flavor, aesthetic beauty, integrity, and value, whether working with the first asparagus of spring or the last tomatoes of summer.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="gold-frame bg-[var(--color-warm-white)] relative text-center">
          <div className="gold-frame-inner absolute inset-0" />
          <div className="relative z-10 space-y-2 text-sm text-[var(--color-warm-gray)] mb-6">
            <p>2500 Folsom Street, San Francisco</p>
            <p>Tuesday &ndash; Saturday, 5:45 &ndash; 9:30 PM</p>
            <p>415 821 2500 &middot; stephen@heirloom-sf.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="btn-gold">Make a Reservation</a>
            <a href="http://www.kitchenwork.com/" target="_blank" rel="noopener noreferrer" className="btn-gold">Subscribe to kitchenwork</a>
            <a href="mailto:stephen@heirloom-sf.com?subject=Mailing List" className="btn-gold">Join our Mailing List!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
