interface WinePairingResultProps {
  result: {
    wine: string;
    explanation: string;
    sommNote: string;
  };
  onTryAnother: () => void;
}

export default function WinePairingResult({ result, onTryAnother }: WinePairingResultProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[var(--color-terracotta)] bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-[var(--color-terracotta)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.94 2.06a2.25 2.25 0 0 0 2.012 3.19h11.856a2.25 2.25 0 0 0 2.012-3.19L19 14.5M5 14.5h14" />
            </svg>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)]">
              {result.wine}
            </h3>
          </div>
        </div>

        <p className="text-[var(--color-earth-light)] leading-relaxed mb-6">
          {result.explanation}
        </p>

        <div className="bg-[var(--color-cream)] rounded-lg p-4 border-l-3 border-[var(--color-terracotta)]">
          <p className="text-sm font-medium text-[var(--color-terracotta)] mb-1">Somm&apos;s Note</p>
          <p className="text-sm text-[var(--color-earth-light)] italic leading-relaxed">
            {result.sommNote}
          </p>
        </div>
      </div>

      <button
        onClick={onTryAnother}
        className="w-full py-3 px-6 rounded-lg border border-[var(--color-sage)] text-[var(--color-sage)] font-medium hover:bg-[var(--color-sage)] hover:text-white transition-colors"
      >
        Try Another Pairing
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
