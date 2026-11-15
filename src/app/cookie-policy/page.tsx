import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How ElevateX Digital uses cookies and local storage, the choices available to you, and how to manage cookie preferences in your browser.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

const updated = "1 January 2026";

const sections: LegalSection[] = [
  {
    heading: "What cookies are",
    body: [
      "Cookies are small files stored by your browser when you visit a website. Similar technologies, such as local storage, can remember a preference without a traditional cookie. We use the term cookies here to cover both.",
    ],
  },
  {
    heading: "Cookies and storage we use",
    list: [
      "Essential: the cookie banner stores your consent choice in your browser's local storage so you are not asked again on every visit. Without it, we cannot remember your preference.",
      "Essential security: our hosting and form infrastructure may process limited technical data, such as an IP address, to protect the site and prevent spam.",
      "Optional analytics: if you accept all cookies, we may measure general site usage to understand which pages are useful. We do not use optional cookies where you have chosen essential only.",
      "No advertising cookies are set by us on this website. If we introduce them in future, we will ask for consent first and update this policy.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "Links to WhatsApp and Instagram take you to third-party platforms, which may set their own cookies once you leave our site. Those platforms are controlled by their own policies, not ours. Our contact forms are processed by our own application and database providers.",
    ],
  },
  {
    heading: "Managing your choice",
    body: [
      "You can accept all cookies or choose essential only in the banner shown on your first visit. To change your choice later, clear the site data for this website in your browser settings and reload the page; the banner will appear again.",
      "Most browsers also let you block or delete cookies entirely. Blocking essential storage may affect how parts of the site behave.",
    ],
  },
  {
    heading: "Do not track signals",
    body: [
      "Some browsers can send a Do Not Track signal. Because there is no common standard for how websites must respond, this site does not currently alter behaviour in response to that signal. We keep optional tracking to a minimum and only with consent.",
    ],
  },
  {
    heading: "Updates",
    body: [
      "If our use of cookies changes, we will update this page and the date shown above.",
      `Questions? Email ${site.contact.email} or call ${site.contact.phoneDisplay}.`,
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="What this website remembers, why it remembers it, and how to change your choice at any time."
      updated={updated}
      sections={sections}
      current="/cookie-policy"
    />
  );
}
