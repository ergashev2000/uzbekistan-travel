import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/util/Providers";
import ProviderNextIntl from "@/util/ProviderNextIntl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../../styles/globals.scss";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default:
//       "WeTravel - Национальный Туристический Информационный Центр Узбекистана",
//     template: "%s | WeTravel",
//   },
//   description:
//     "Национальный &quot;PR-Центр&quot; создан для продвижения туристического, культурного, природного и спортивного потенциала Узбекистана.",
// };

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}


export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps) {
  
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: `Wetravel - ${t("title")}`,
    description: t("description"),
    keywords: t("keywords"),
    applicationName: t("title"),
    type: "website",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },

    twitter: {
      card: "/icon.png",
      title: `Wetravel - ${t("title")}`,
      description: t("description"),
      images: {
        url: t("image"),
      },
    },
    openGraph: {
      title: `Wetravel - ${t("title")}`,
      description: t("description"),
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
