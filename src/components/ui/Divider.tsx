export function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-full"
      >
        <path
          d="M20 40 H1180"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="220" cy="40" r="6" fill="rgba(56,189,248,0.6)" />
        <circle cx="600" cy="40" r="6" fill="rgba(34,197,94,0.6)" />
        <circle cx="980" cy="40" r="6" fill="rgba(244,63,94,0.6)" />
      </svg>
    </div>
  );
}
