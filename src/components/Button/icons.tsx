export function PlusIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
      <path d="M0 11 4.5 5.5 7.5 8 14 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Ring + 8 teeth, built with strokes only so it never needs to "punch a hole" through a background color. */
export function GearIcon() {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      {teeth.map((deg) => (
        <rect
          key={deg}
          x="7.1"
          y="0.4"
          width="1.8"
          height="2.6"
          rx="0.6"
          fill="currentColor"
          transform={`rotate(${deg} 8 8)`}
        />
      ))}
    </svg>
  );
}
