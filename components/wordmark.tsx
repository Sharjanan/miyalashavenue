type WordmarkProps = {
  compact?: boolean;
  className?: string;
};

export function Wordmark({ compact = false, className = "" }: WordmarkProps) {
  return (
    <div
      className={`inline-flex flex-col items-center text-center text-black ${className}`}
      aria-label="Miya Lash Avenue, Lash Artist, Montreal"
    >
      <span
        className={`logo-display uppercase leading-[0.78] ${
          compact ? "text-[1.65rem] sm:text-[1.9rem]" : "text-5xl sm:text-6xl"
        }`}
      >
        <span className="block whitespace-nowrap">Miya Lash</span>
        <span className="block">Avenue</span>
      </span>
      <span
        className={`uppercase ${
          compact
            ? "mt-2 text-[0.42rem] tracking-[0.34em]"
            : "mt-4 text-[0.58rem] tracking-[0.5em] sm:text-[0.65rem]"
        }`}
      >
        Lash Artist <span aria-hidden="true">|</span> Montreal
      </span>
    </div>
  );
}
