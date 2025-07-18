import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className="bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            HB
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
    </header>
  )
}
