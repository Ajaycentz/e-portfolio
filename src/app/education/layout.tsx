import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alden Jay Centino",
  description:
    "Academic background in information technology, web applications, and honors education.",
  openGraph: {
    title: "Education | Alden Jay Centino",
    description:
      "Academic background in information technology, web applications, and honors education.",
    images: ["/Profile.jpg"],
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
