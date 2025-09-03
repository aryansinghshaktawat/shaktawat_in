import { Space_Grotesk } from 'next/font/google'

// Space Grotesk for headings (h1, h2)
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// For body text - using system monospace with Geist fallback
// Note: To use actual Geist font files, download from https://vercel.com/font
export const geistMono = {
  variable: '--font-geist-mono',
  className: 'font-geist-mono',
}

// System Arial fallback
export const systemFont = {
  style: {
    fontFamily: 'Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
}
