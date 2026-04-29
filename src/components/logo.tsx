export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Nova Analytics Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#4A7C59" />
        <path
          d="M8 22L13 14L17 18L24 10"
          stroke="#FDF8F0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="10" r="2.5" fill="#FDF8F0" />
      </svg>
      <span className="text-xl font-bold text-dark dark:text-white">
        Nova<span className="text-primary"> Analytics</span>
      </span>
    </div>
  );
}

export function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#4A7C59" />
      <path
        d="M8 22L13 14L17 18L24 10"
        stroke="#FDF8F0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="10" r="2.5" fill="#FDF8F0" />
    </svg>
  );
}
