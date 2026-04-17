import { pressQuotes } from "@/data/press";

export default function PressPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-12 text-center">
        Press
      </h1>
      <div className="space-y-10">
        {pressQuotes.map((item, i) => (
          <div key={i} className="text-center">
            {item.quote && (
              <blockquote className="font-[family-name:var(--font-serif)] text-lg sm:text-xl text-[var(--color-earth)] italic leading-relaxed mb-3 max-w-lg mx-auto">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            )}
            <p className="text-sm text-[#630000] font-medium">
              {item.source}
            </p>
            <p className="text-sm text-[var(--color-earth-light)]">
              {item.title}{item.author ? ` — ${item.author}` : ""}
            </p>
            {i < pressQuotes.length - 1 && (
              <div className="w-8 h-px bg-[var(--color-cream-dark)] mx-auto mt-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
