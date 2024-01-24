import { ReactNode } from "react";
import { Lato } from "next/font/google";
import { getTranslations } from "next-intl/server";

import Providers from "@/util/Providers";
import ProviderNextIntl from "@/util/ProviderNextIntl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({ subsets: ["latin"], weight: "400" });
import "../../styles/globals.scss";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: ` ${t("title")} | WeTravel.uz`,
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
      title: `${t("title")} | WeTravel.uz`,
      description: t("description"),
      images: {
        url: t("image"),
      },
    },
    openGraph: {
      title: `${t("title")} | WeTravel.uz`,
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
      <body className={lato.className}>
        <Providers>
          <ProviderNextIntl locale={locale}>
            <Navbar />
            <main className="container mx-auto px-3">{children}</main>
            <Footer />
          </ProviderNextIntl>
        </Providers>
      </body>
    </html>
  );
}
