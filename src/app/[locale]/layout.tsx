import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/util/Providers";
import ProviderNextIntl from "@/util/ProviderNextIntl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "WeTravel - Национальный Туристический Информационный Центр Узбекистана",
    template: "%s | WeTravel",
  },
  description:
    "Национальный &quot;PR-Центр&quot; создан для продвижения туристического, культурного, природного и спортивного потенциала Узбекистана.",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ProviderNextIntl locale={locale}>
          <Providers>
            <Navbar />
            <main className="container mx-auto px-3">{children}</main>
            <Footer />
          </Providers>
        </ProviderNextIntl>
      </body>
    </html>
  );
}
