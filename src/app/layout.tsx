import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import localFont from "@next/font/local"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coswa | Sewa Bus Pariwisata Terpercaya dan Nyaman",
  description:
    "Penyedia layanan sewa bus yang hanya menyediakan armada unggulan dengan fasilitas lengkap.",
}

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-clashDisplay",
})

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-satoshi",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} font-body text-primary`}
      >
        <Navbar />
        <main className="pt-24 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
