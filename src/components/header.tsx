import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 bottom-auto left-0 z-[100] border-b border-[#e2e2e2] bg-white/90 py-[12.5px] backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 whitespace-nowrap sm:px-6 lg:px-8">
        <nav className="container flex items-center justify-between">
          <div className="relative ml-[-18px] flex items-center text-[18px] font-semibold tracking-[-0.025em] no-underline">
            <Link href="/" aria-current="page">
              Senuka Chandunu
            </Link>
          </div>
          {/* <ul className="text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10"> */}

          <ul
            className="flex hidden items-center justify-center text-center font-light sm:gap-2 md:flex"
            style={{ color: 'var(--text)' }}
          >
            <li>
              <a
                href="#about"
                className="hover:text-foreground relative z-[102] px-[18px] py-[8px] text-[14px] font-medium tracking-[-0.011em] no-underline transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-foreground relative z-[102] px-[18px] py-[8px] text-[14px] font-medium tracking-[-0.011em] no-underline transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="hover:text-foreground relative z-[102] px-[18px] py-[8px] text-[14px] font-medium tracking-[-0.011em] no-underline transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#insights"
                className="hover:text-foreground relative z-[102] px-[18px] py-[8px] text-[14px] font-medium tracking-[-0.011em] no-underline transition-colors"
              >
                Insights
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-foreground relative z-[102] px-[18px] py-[8px] text-[14px] font-medium tracking-[-0.011em] no-underline transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="relative mr-[-18px]">
            <a href="">
              <p>Project Request #</p>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
