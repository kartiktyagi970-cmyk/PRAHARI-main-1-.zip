import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ElevateX Digital collects, uses and protects the information you share through enquiries, creator applications and newsletter subscriptions.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const updated = "1 January 2026";

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is a digital marketing and business management studio founded by ${site.contact.founderName} and based in ${site.contact.locationLong}. We work with clients remotely around the world.`,
      `For any privacy question, or to make a request about your data, email ${site.contact.email} or call ${site.contact.phoneDisplay}. We are the controller of the personal information described in this policy.`,
    ],
  },
  {
    heading: "Information we collect",
    body: ["We only ask for what we need to respond to you and to run the studio."],
    list: [
      "Contact enquiries: your name, email address, phone or WhatsApp number, business name, service of interest, budget range and the message you send.",
      "Creator applications: your name, email address, phone number, area of work, portfolio link and the details you share about your skills.",
      "Newsletter subscriptions: your email address, if you choose to subscribe.",
      "Cookie preference: the choice you make in the cookie banner, stored in your browser.",
      "Technical data: limited information such as IP address and request timestamps, used for security and to prevent form abuse.",
    ],
  },
  {
    heading: "How we use your information",
    list: [
      "To reply to your enquiry, discuss scope and send you a proposal or quote.",
      "To review creator applications and contact you about opportunities.",
      "To send occasional growth notes if you subscribed. You can unsubscribe at any time.",
      "To keep our website secure, prevent spam and rate-limit abusive form submissions.",
      "To meet legal, accounting or contractual obligations where they apply.",
    ],
  },
  {
    heading: "Our legal basis",
    body: [
      "Where consent is required, we rely on the consent you give when you submit a form, tick the enquiry consent box or subscribe. Where consent is not the right basis, we rely on our legitimate interest in responding to enquiries and operating our business, or on steps taken at your request before entering a contract.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    body: [
      "We do not sell your personal information. We do not share it with third parties for their own marketing.",
      "We may share limited information with service providers that help us run the website and communicate with you — for example hosting, database and business email providers — only as needed to provide those services. If you choose to contact us through WhatsApp or Instagram, your use of those platforms is covered by their own privacy policies.",
      "We may disclose information if required by law, or to protect our rights, safety or property.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry and application records for as long as needed to deal with your request and maintain a reasonable record of our conversations. Newsletter details are kept until you unsubscribe. Request deletion at any time by emailing us.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete, restrict or object to the processing of your personal information, or to withdraw consent. To make a request, email us and we will respond within a reasonable period. We may need to verify your identity before acting.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable technical and organisational steps to protect the information you share, including restricting access and using reputable service providers. No method of transmission or storage is completely secure, so please avoid sending sensitive financial or identity documents through the contact form.",
    ],
  },
  {
    heading: "Children",
    body: ["Our services are intended for businesses and adults. We do not knowingly collect personal information from children."],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as our services or legal obligations change. The latest version is always published here with the date shown above.",
      `Questions? Email ${site.contact.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Plain-language answers about the information you share with ElevateX Digital, why we collect it and the choices you have."
      updated={updated}
      sections={sections}
      current="/privacy-policy"
    />
  );
}
