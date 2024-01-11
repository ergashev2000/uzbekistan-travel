import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tashkent haqida",
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
