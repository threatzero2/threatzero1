type Props = {
  variant?: "default" | "light";
};

export default function ScanBox({ variant = "default" }: Props) {
  const isLight = variant === "light";

  return (
    <div className={isLight ? "scanBox scanBoxLight" : "scanBox"}>
      <input
        type="text"
        placeholder="Voer e-mailadres of website in"
        className={isLight ? "scanInput scanInputLight" : "scanInput"}
      />

      <button
        className={isLight ? "scanButton scanButtonLight" : "scanButton"}
        aria-label="Scannen"
      >
        {/* SVG zoek-icoon (geen emoji) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>Scannen</span>
      </button>
    </div>
  );
}
