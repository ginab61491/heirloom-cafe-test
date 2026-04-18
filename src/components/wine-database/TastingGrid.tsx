interface TastingGridProps {
  acidity: number;
  tannin?: number;
  body: number;
  sweetness: number;
  alcohol: number;
  aromas: string[];
  compact?: boolean;
}

function Dots({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[9px] text-[var(--color-warm-gray)] w-10 text-right">{label}</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= value ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-cream-dark)] opacity-40'}`} />
        ))}
      </div>
    </div>
  );
}

export default function TastingGrid({ acidity, tannin, body, sweetness, alcohol, aromas, compact }: TastingGridProps) {
  return (
    <div className={compact ? "space-y-0.5" : "space-y-1"}>
      <Dots value={acidity} label="Acid" />
      <Dots value={body} label="Body" />
      {tannin != null && <Dots value={tannin} label="Tann" />}
      <Dots value={sweetness} label="Sweet" />
      <Dots value={alcohol} label="Alc" />
      {!compact && aromas.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {aromas.map(a => (
            <span key={a} className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--color-parchment)] text-[var(--color-warm-gray)]">{a}</span>
          ))}
        </div>
      )}
    </div>
  );
}
