import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="relative flex grow flex-col bg-slate-850 py-36">
      <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
    </div>
  );
}
