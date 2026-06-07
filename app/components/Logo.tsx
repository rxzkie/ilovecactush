import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="35 18 130 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-16 w-16 shrink-0", className)}
      aria-label="I love Cactus"
      role="img"
    >
      <defs>
        <pattern
          id="logo-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#e8c4b8"
            strokeWidth="0.6"
            opacity="0.45"
          />
        </pattern>
      </defs>

      <rect x="35" y="18" width="130" height="155" fill="url(#logo-grid)" opacity="0.3" />

      <path
        d="M100 120 C76 120 58 102 58 80 C58 64 72 50 88 48 C92 38 100 32 100 32 C100 32 108 38 112 48 C128 50 142 64 142 80 C142 102 124 120 100 120Z"
        fill="#f5d0d6"
        opacity="0.4"
      />

      <text
        x="54"
        y="40"
        fill="#1e2e28"
        fontSize="18"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
      >
        I
      </text>
      <path
        d="M72 26 C72 20 78 16 82 20 C86 16 92 20 92 26 C92 34 82 42 82 42 C82 42 72 34 72 26Z"
        fill="#d45d5d"
      />
      <text
        x="98"
        y="40"
        fill="#1e2e28"
        fontSize="18"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
        letterSpacing="1"
      >
        CACTUS
      </text>

      <ellipse cx="56" cy="130" rx="14" ry="20" fill="#7c9a7c" />
      <path
        d="M50 120 L50 110 M56 118 L56 108 M62 120 L62 110"
        stroke="#faf8f4"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M44 150 Q56 154 68 150 L66 162 Q56 166 46 162 Z"
        fill="#e8a4b0"
      />
      <circle cx="48" cy="154" r="2" fill="#faf8f4" opacity="0.85" />
      <circle cx="56" cy="156" r="2" fill="#faf8f4" opacity="0.85" />
      <circle cx="64" cy="154" r="2" fill="#faf8f4" opacity="0.85" />

      <ellipse cx="100" cy="126" rx="10" ry="14" fill="#6b9e6b" />
      <ellipse cx="94" cy="114" rx="8" ry="10" fill="#7c9a7c" />
      <ellipse cx="106" cy="112" rx="7" ry="9" fill="#5a8a5a" />
      <path
        d="M88 150 L88 162 Q100 166 112 162 L112 150 Z"
        fill="#e8d48a"
      />
      <path d="M90 154 H110" stroke="#d4c070" strokeWidth="1" opacity="0.55" />
      <path d="M90 157 H110" stroke="#d4c070" strokeWidth="1" opacity="0.55" />

      <ellipse cx="144" cy="132" rx="11" ry="13" fill="#6b9e6b" />
      <circle cx="144" cy="120" r="4" fill="#f0a878" />
      <path
        d="M136 150 Q144 154 152 150 L150 162 Q144 166 138 162 Z"
        fill="#e8b8a8"
      />
      <path
        d="M138 154 C140 152 142 152 144 154 C146 152 148 152 150 154"
        stroke="#faf8f4"
        strokeWidth="1"
        fill="none"
        opacity="0.75"
      />
    </svg>
  );
}
