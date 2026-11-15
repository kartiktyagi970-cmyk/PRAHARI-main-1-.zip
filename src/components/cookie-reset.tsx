"use client";

const KEY = "elevatex-cookie-consent";

export function CookieReset() {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          window.localStorage.removeItem(KEY);
        } catch {
          /* storage unavailable */
        }
        window.location.reload();
      }}
      className="transition-colors hover:text-gold-soft"
    >
      Cookie preferences
    </button>
  );
}
