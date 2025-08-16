import type React from "react"
import "./css/style.css"
import type { Metadata } from "next"
import { getSeoSettings, getSiteName } from "@/get-api-data/seo-setting"
import { GoogleTagManager } from "@next/third-parties/google"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await getSeoSettings()
  const site_name = await getSiteName()
  return {
    title: `${seoSettings?.siteTitle || "Home Page"} | ${site_name}`,
    description:
      seoSettings?.metadescription ||
      "Cozy-commerce is a next.js e-commerce boilerplate built with nextjs, typescript, tailwindcss, and prisma.",
    keywords: seoSettings?.metaKeywords || "e-commerce, online store",
    openGraph: {
      images: seoSettings?.metaImage ? [seoSettings.metaImage] : [],
    },
    icons: {
      icon: seoSettings?.favicon || "/favicon.ico",
      shortcut: seoSettings?.favicon || "/favicon.ico",
      apple: seoSettings?.favicon || "/favicon.ico",
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const seoSettings = await getSeoSettings()
  return (
    <html lang="en">
      <body className={`${dmSans.variable}`} suppressHydrationWarning={true}>
        {children}
        {seoSettings?.gtmId && <GoogleTagManager gtmId={seoSettings.gtmId} />}
      </body>
    </html>
  )
}
