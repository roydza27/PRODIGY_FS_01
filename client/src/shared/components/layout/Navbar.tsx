import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet"

export default function Navbar() {
  const navLinkClass =
    "rounded transition-colors hover:text-[#A1A1AA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 min-h-[68px] border-b border-[#27272A] bg-[#111113]/85 px-4 py-2 backdrop-blur-xl md:px-8"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
        >
          <span className="sr-only">Your Company</span>
          <img
            src="https://readymadeui.com/logo-alt.svg"
            alt="logo"
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <a href="#hero" className={navLinkClass}>
            Home
          </a>
          <a href="#features" className={navLinkClass}>
            Features
          </a>
          <a href="#stats" className={navLinkClass}>
            Stats
          </a>
          <a href="#content" className={navLinkClass}>
            About
          </a>
          <a href="#cta" className={navLinkClass}>
            Contact
          </a>
          <Link to="/login" className={navLinkClass}>
            Log in
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="rounded-xl border border-transparent bg-[#FAFAFA] px-3.5 py-2 text-sm font-semibold text-[#09090B] transition-all hover:bg-[#E4E4E7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
          >
            Sign up
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A] lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-7 text-[#FAFAFA]" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] border-[#27272A] bg-[#111113] p-0 text-[#FAFAFA]"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Main navigation</SheetTitle>
                <SheetDescription>
                  Mobile navigation menu for the website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex h-[68px] items-center border-b border-[#27272A] px-4">
                <Link
                  to="/"
                  className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27272A]"
                >
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://readymadeui.com/logo-alt.svg"
                    alt="logo"
                    className="h-9 w-auto"
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-6 px-4 py-6 text-sm font-medium">
                <a href="#hero" className={navLinkClass}>
                  Home
                </a>
                <a href="#features" className={navLinkClass}>
                  Features
                </a>
                <a href="#stats" className={navLinkClass}>
                  Stats
                </a>
                <a href="#content" className={navLinkClass}>
                  About
                </a>
                <a href="#cta" className={navLinkClass}>
                  Contact
                </a>
                <Link to="/login" className={navLinkClass}>
                  Log in
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}