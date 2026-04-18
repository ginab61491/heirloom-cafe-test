const labelConfig: Record<string, { icon: string; text: string; className: string }> = {
  'famous-winemaker': { icon: '★', text: 'Famous Winemaker', className: 'bg-[var(--color-gold)] text-white' },
  'prestigious-brand': { icon: '◆', text: 'Prestigious', className: 'bg-[var(--color-charcoal)] text-white' },
  'well-known-brand': { icon: '●', text: 'Well Known', className: 'bg-[var(--color-warm-gray)] text-white' },
  'hidden-gem': { icon: '◇', text: 'Hidden Gem', className: 'bg-[var(--color-sage)] text-white' },
  'amazing-value': { icon: '$', text: 'Amazing Value', className: 'bg-[var(--color-terracotta)] text-white' },
  'cult-following': { icon: '♦', text: 'Cult Following', className: 'bg-[var(--color-wine)] text-white' },
  'unique-style': { icon: '⚡', text: 'Unique Style', className: 'border border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent' },
  'sommelier-favorite': { icon: '♦', text: 'Somm Favorite', className: 'bg-[var(--color-wine)] bg-opacity-80 text-white' },
  'rising-star': { icon: '↑', text: 'Rising Star', className: 'bg-[var(--color-gold)] bg-opacity-80 text-white' },
  'heritage-estate': { icon: '⌂', text: 'Heritage', className: 'bg-[var(--color-parchment)] text-[var(--color-charcoal)] border border-[var(--color-cream-dark)]' },
  'minimal-intervention': { icon: '🌿', text: 'Natural', className: 'bg-[var(--color-sage)] bg-opacity-70 text-white' },
  'age-worthy': { icon: '⏳', text: 'Age-Worthy', className: 'bg-[var(--color-charcoal)] bg-opacity-80 text-white' },
};

export default function LabelBadge({ label }: { label: string }) {
  const config = labelConfig[label];
  if (!config) return null;
  return (
    <span className={`inline-flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded ${config.className}`}>
      <span>{config.icon}</span> {config.text}
    </span>
  );
}
