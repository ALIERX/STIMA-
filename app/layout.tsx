import './globals.css'
import Link from 'next/link'

export const metadata = { title: 'STIMA Portal Demo', description: 'Interactive demo' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="border-b border-white/10">
          <nav className="container py-4 flex items-center gap-6">
            <Link href="/" className="font-bold text-xl">STIMA Portal</Link>
            <div className="text-sm flex gap-4">
              <Link href="/search">Search</Link>
              <Link href="/fractional">Fractional</Link>
              <Link href="/predictions">Predictions</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/appraise">Appraise</Link>
              <Link href="/swap">Swap</Link>
              <Link href="/leaderboard">Leaderboard</Link>
            </div>
          </nav>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="container py-10 text-white/50 text-sm">© STIMA Demo</footer>
      </body>
    </html>
  )
}
