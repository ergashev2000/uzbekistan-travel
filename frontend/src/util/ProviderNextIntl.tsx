import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
  locale: string;
};

export default function Providers({ children, locale }: ProvidersProps) {
  const messages = useMessages();

  if (!messages) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
