import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - ARCHITECT",
  description:
    "How the ARCHITECT XMR escrow marketplace works. Frequently asked questions about Monero escrow, vendors, and security.",
}

const escrowSteps = [
  {
    step: "1",
    title: "Browse & Select",
    description:
      "Find a Python tool or script in the marketplace. Review the listing description, vendor reputation, reviews, and price before deciding.",
  },
  {
    step: "2",
    title: "Fund the Escrow",
    description:
      "A unique Monero multisig (2-of-3) escrow address is generated for your transaction. Send the listed XMR amount. Funds are locked and held securely by the escrow system.",
  },
  {
    step: "3",
    title: "Vendor Delivers",
    description:
      "Once payment confirms on-chain (10 confirmations), the vendor is notified. They deliver the code via your chosen encrypted channel (PGP, Session, etc).",
  },
  {
    step: "4",
    title: "Confirm or Dispute",
    description:
      "Review the delivered code. If satisfied, confirm delivery and funds are released to the vendor. If there is an issue, open a dispute within the 48-hour window.",
  },
]

const faqs = [
  {
    question: "What is XMR multisig escrow?",
    answer:
      "XMR multisig (multi-signature) escrow uses a 2-of-3 key scheme where the buyer, vendor, and platform each hold one key. Any two of the three parties must agree to release or refund the funds. This prevents either party from stealing funds unilaterally and provides neutral arbitration.",
  },
  {
    question: "How long does a transaction take?",
    answer:
      "After sending XMR, the escrow requires 10 blockchain confirmations (roughly 20 minutes). Once confirmed, the vendor has 24 hours to deliver. After delivery, you have 48 hours to confirm or dispute before automatic release.",
  },
  {
    question: "What happens during a dispute?",
    answer:
      "If you open a dispute, the platform arbitrator reviews evidence from both parties. The arbitrator uses their key combined with either the buyer or vendor key to release funds to the appropriate party. Disputes are typically resolved within 72 hours.",
  },
  {
    question: "How do I verify a vendor?",
    answer:
      "All vendors have a PGP public key on their profile. You can verify their identity by checking their key against external keyservers. Additionally, review their sales count, rating, review history, and how long they have been on the platform.",
  },
  {
    question: "What communication channels are used?",
    answer:
      "All marketplace communication is PGP-encrypted. For direct vendor communication, we recommend Session Messenger or SimpleX Chat. Never share your Monero wallet seed or private keys with anyone.",
  },
  {
    question: "Are there fees?",
    answer:
      "The platform charges a 5% escrow fee on each transaction, taken from the vendor side. Buyers pay the exact listed price. There are no hidden fees, withdrawal charges, or deposit minimums.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "If the vendor fails to deliver within 24 hours, you can request an automatic refund. For quality disputes, the arbitrator will review the case. Partial refunds are possible if the delivered product differs from the listing description.",
  },
  {
    question: "How do I become a vendor?",
    answer:
      "Navigate to the Create Listing page and fill out the listing form. New vendors start with a probationary period where escrow hold times are extended. After 10 successful sales, hold times normalize. A PGP key is required for vendor verification.",
  },
]

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          How It <span className="gradient-text">Works</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
          Secure, anonymous Python script trading with Monero 2-of-3 multisig
          escrow. No accounts, no logs, just cryptographic trust.
        </p>
      </div>

      {/* Escrow Steps */}
      <section className="mt-14">
        <h2 className="mb-6 text-xl font-bold text-foreground">
          Escrow Process
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {escrowSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">
                {step.step}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Multisig Diagram */}
      <section className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6 neon-border md:p-8">
        <h2 className="text-lg font-bold text-foreground">
          2-of-3 Multisig Explained
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-foreground">Buyer</p>
            <p className="mt-1 text-xs text-muted-foreground">Holds Key A</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-foreground">Vendor</p>
            <p className="mt-1 text-xs text-muted-foreground">Holds Key B</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-foreground">Platform</p>
            <p className="mt-1 text-xs text-muted-foreground">Holds Key C</p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Any 2 of the 3 keys are required to release or refund escrow funds.
          No single party can act alone.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="mt-14">
        <h2 className="mb-6 text-xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-border bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-foreground hover:text-primary [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <div className="border-t border-border px-5 pb-4 pt-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 text-center">
        <p className="text-muted-foreground">Ready to get started?</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            href="/browse"
            className="rounded-lg border border-primary/40 bg-primary/10 px-6 py-2.5 text-sm font-medium text-primary neon-border-subtle hover:bg-primary/20"
          >
            Browse Market
          </Link>
          <Link
            href="/create"
            className="rounded-lg border border-border bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
          >
            Become a Vendor
          </Link>
        </div>
      </section>
    </div>
  )
}
