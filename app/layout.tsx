import type { Metadata } from "next"

import "./globals.css"
import "lenis/dist/lenis.css"
import { fontVariables } from "@/fonts"
import { siteConfig } from "@/config/site.config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Provider from "./provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url as string),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/open-graph.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/open-graph.png`],
    creator: "@gada_studios",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontVariables("font-delight antialiased")}
    >
      <body>
        <Provider>
          <Header />
          <main className="flex-1">{props.children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
