import { WhatsApp } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp`}
        className="group flex items-center gap-3 rounded-full border border-gold/40 bg-[#0b0b0e]/95 py-2 pl-2 pr-4 shadow-[0_18px_46px_-16px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 hover:border-gold/80 hover:bg-[#121216]"
      >
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep text-[#08080a]">
          <span className="absolute inset-0 rounded-full pulse-ring" />
          <WhatsApp className="relative h-5 w-5" />
        </span>
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-gold-soft/80">Chat with us</span>
          <span className="text-[0.78rem] font-semibold text-bone">WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
