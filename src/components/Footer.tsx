import NewsletterSignup from "./NewsletterSignup";

const newsletterEnabled = process.env.NEWSLETTER_SIGNUP_ENABLED === "true";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-sage)] text-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact */}
        <div className="text-sm space-y-1.5">
          <h4 className="font-[family-name:var(--font-serif)] text-lg text-white mb-3">heirloom caf&eacute;</h4>
          <p>2500 Folsom Street</p>
          <p>San Francisco, CA</p>
          <p className="mt-3">Tuesday &ndash; Thursday: 5:45 &ndash; 9:30 PM</p>
          <p>Friday &ndash; Saturday: 5:45 &ndash; 10:00 PM</p>
          <p className="mt-3"><a href="tel:4158212500" className="hover:text-white transition-colors">415 821 2500</a></p>
          <p><a href="mailto:stephen@heirloom-sf.com" className="hover:text-white transition-colors">stephen@heirloom-sf.com</a></p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
            Make a Reservation
          </a>
          {newsletterEnabled && <NewsletterSignup />}
        </div>
      </div>

      <div className="text-center text-xs text-[var(--color-cream)] opacity-50 pb-6">
        &copy; heirloom caf&eacute;
      </div>
    </footer>
  );
}
