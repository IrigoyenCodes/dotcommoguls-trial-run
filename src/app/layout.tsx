import "@/css/satoshi.css";
import "@/css/style.css";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s | Nova Analytics Dashboard",
    default: "Nova Analytics — Data Dashboard for Modern Teams",
  },
  description:
    "Nova Analytics provides powerful, real-time data dashboards for modern teams. Visualize metrics, track KPIs, and make data-driven decisions.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#4A7C59" showSpinner={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
