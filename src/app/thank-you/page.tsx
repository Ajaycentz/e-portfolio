import Link from "next/link";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Thank you | Alden Jay Centino",
  description: "Your inquiry has been received.",
  openGraph: {
    title: "Thank you | Alden Jay Centino",
    description: "Your inquiry has been received.",
    images: ["/Profile.jpg"],
  },
};

export default function ThankYouPage() {
  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <SectionHeading
              eyebrow="Message sent"
              title="Thank you for reaching out"
              description="Your inquiry is in. I will reply within 24-48 hours."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full border border-white/20 bg-white px-5 py-3 text-xs uppercase tracking-[0.3em] text-black"
              >
                View work
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
              >
                Back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageReveal>
  );
}
