"use client"
import Link from "next/link"
import { navbarItems } from "./navbar-item"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "react-feather"

export default function Navbar() {
  const pathName = usePathname()
  const [nav, setNav] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`px-4 py-4 md:px-12 md:py-8 lg:px-32 lg:py-6 fixed w-full flex gap-4 transition-[background] duration-300 justify-between items-center z-20 ${
        scrollY > 0 ? "bg-white/90 shadow-md" : "bg-transparent"
      }`}
    >
      <h1 className="font-title font-semibold text-2xl">Coswa</h1>
      <div className="hidden md:flex gap-8">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`font-body transition-all rounded-md px-3 ${
              pathName === item.url
                ? "font-semibold border-2 border-[color:var(--primary)] "
                : "font-normal hover:border hover:border-[color:var(--primary)]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>

      {nav && (
        <ul
          className={`flex flex-col gap-2 justify-center items-center top-0 left-0 w-full h-screen bg-white transition-[translate] ease-in-out duration-500 fixed md:hidden ${
            // slide down animation
            nav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {navbarItems.map((item, index) => (
            <li key={index} className="px-4 cursor-pointer text-2xl">
              <Link
                key={index}
                href={item.url}
                className={`font-body transition-all rounded-md px-3 ${
                  pathName === item.url
                    ? "font-semibold border-2 border-[color:var(--primary)] "
                    : "font-normal hover:border hover:border-[color:var(--primary)]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
