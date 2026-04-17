export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-cream-dark)] bg-[var(--color-warm-white)]">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[var(--color-earth-light)]">
        <div>
          <h4 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-earth)] mb-2">Visit</h4>
          <p>2500 Folsom Street</p>
          <p>San Francisco, CA</p>
          <p className="mt-2">Tuesday &ndash; Saturday</p>
          <p>5:45 &ndash; 9:30 PM</p>
        </div>
        <div>
          <h4 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-earth)] mb-2">Contact</h4>
          <p><a href="mailto:stephen@heirloom-sf.com" className="hover:text-[#630000] transition-colors">stephen@heirloom-sf.com</a></p>
          <p><a href="tel:4158212500" className="hover:text-[#630000] transition-colors">415 821 2500</a></p>
        </div>
        <div>
          <h4 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-earth)] mb-2">Links</h4>
          <p><a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="hover:text-[#630000] transition-colors">Reservations</a></p>
          <p><a href="https://www.toasttab.com/heirloom-cafe-2500-folsom-street/giftcards" target="_blank" rel="noopener noreferrer" className="hover:text-[#630000] transition-colors">Gift Cards</a></p>
          <p><a href="http://www.kitchenwork.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#630000] transition-colors">Kitchenwork</a></p>
        </div>
      </div>
      <div className="text-center text-xs text-[var(--color-earth-light)] pb-6 opacity-50">
        &copy; Heirloom Caf&eacute;
      </div>
    </footer>
  );
}
