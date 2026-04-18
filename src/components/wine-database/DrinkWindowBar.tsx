interface DrinkWindowBarProps {
  start: number;
  end: number;
  agingPotential: string;
}

export default function DrinkWindowBar({ start, end, agingPotential }: DrinkWindowBarProps) {
  const currentYear = new Date().getFullYear();
  const totalSpan = Math.max(end - start, 1);
  const elapsed = Math.min(Math.max(currentYear - start, 0), totalSpan);
  const pct = (elapsed / totalSpan) * 100;
  const isApproaching = end - currentYear <= 2 && end >= currentYear;
  const isPast = currentYear > end;

  const barColor = isPast ? 'bg-red-400' : isApproaching ? 'bg-yellow-500' : 'bg-[var(--color-sage)]';
  const label = isPast ? 'Past window' : isApproaching ? 'Drink soon' : agingPotential === 'hold' ? 'Hold' : 'In window';

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[9px] text-[var(--color-warm-gray)]">
        <span>{start}</span>
        <span className={`font-medium ${isPast ? 'text-red-500' : isApproaching ? 'text-yellow-600' : 'text-[var(--color-sage)]'}`}>{label}</span>
        <span>{end}</span>
      </div>
      <div className="h-1.5 bg-[var(--color-cream-dark)] rounded-full overflow-hidden">
        <div className={`h-full ${barColor} rounded-full transition-all`} style={{ width: `${Math.min(pct, 100)}%` }} />
      </div>
    </div>
  );
}
