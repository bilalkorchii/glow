import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "GLOWARIA - Accessories & Makeup",
  description: "Shop beautiful accessories and makeup at GLOWARIA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%85%D8%AA%D8%AC%D8%B1%20%D9%85%D9%84%D8%A7%D8%A8%D8%B3%20%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9%20-h3uxxDDCr9OHuM0RgCI6yHew37vxZl.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full bg-[#97225e] backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <Link href="/" className="relative w-32 h-full flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%85%D8%AA%D8%AC%D8%B1%20%D9%85%D9%84%D8%A7%D8%A8%D8%B3%20%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9%20-h3uxxDDCr9OHuM0RgCI6yHew37vxZl.png"
                  alt="GLOWARIA"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-[#97225e]">
                  Home
                </Link>
                <Link href="#collection" className="text-white hover:text-[#97225e]">
                  Collection
                </Link>
                <Link href="#" className="text-white hover:text-[#97225e]">
                  About
                </Link>
                <Link href="#" className="text-white hover:text-[#97225e]">
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="bg-[#97225e] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="relative w-32 h-12">
                    <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%85%D8%AA%D8%AC%D8%B1%20%D9%85%D9%84%D8%A7%D8%A8%D8%B3%20%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9%20-h3uxxDDCr9OHuM0RgCI6yHew37vxZl.png"

                      alt="GLOWARIA"
                      fill
                      className="object-contain "
                      unoptimized
                    />
                  </div>
                  <p className="text-pink-200">Your premier destination for beauty and accessories.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-pink-200 hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-pink-200 hover:text-white">
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-pink-200 hover:text-white">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-pink-200 hover:text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="text-pink-200">
                    <a
  href="https://wa.me/212772264913?text=Hello%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  WhatsApp: 0772264913
</a>

                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/glowariaaa/" className="text-pink-200 hover:text-white">
                      Instagram
                    </a>
                    <a href="#" className="text-pink-200 hover:text-white">
                      Facebook
                    </a>
                    <a href="#" className="text-pink-200 hover:text-white">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-pink-800/50 mt-8 pt-8 text-center text-pink-200">
                <p>&copy; {new Date().getFullYear()} GLOWARIA. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'