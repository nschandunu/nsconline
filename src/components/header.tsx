import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <nav className="fixed top-0 right-0 bottom-auto left-0 z-[1000] border-b border-[#e2e2e2] bg-white/90 py-[12.5px] backdrop-blur-sm">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center text-[18px] font-semibold tracking-[-0.025em] no-underline">
          <Link href="/" aria-current="page">
            Senuka Chandunu
          </Link>
        </div>

        <ul className="text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10">
          <li className="hover:text-foreground transition-colors">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <p>Project Request</p>
        </div>
      </nav>
    </nav>
  )
}
