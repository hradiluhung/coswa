"use client"
import React from "react"
import { navbarItems } from "../navbar/navbar-item"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Instagram, Linkedin, Youtube } from "react-feather"
import Image from "next/image"

export default function Footer() {
  const pathName = usePathname()
  return (
    <div className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-16 lg:gap-32">
          <div className="max-w-96">
            <Image
              src="/images/logo/logo_text_2.png"
              width={150}
              height={100}
              alt="Logo"
            />
            <p className="text-quaternary font-medium mt-2">
              Memastikan perjalanan aman, memberikan pelayanan ternyaman
            </p>
            <p className="text-quaternary mt-4 text-xs">
              Jalan H. Saweh Desa Sukadami Kec. Cikarang Selatan Kabupaten
              Bekasi Jawa Barat Kode Pos 17530
            </p>
          </div>
          <div className="flex gap-2 flex-col w-full lg:w-auto">
            {navbarItems.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className={`${
                  pathName === item.url
                    ? "font-semibold"
                    : "font-normal text-quaternary"
                } font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:justify-start md:items-start mt-12 md:mt-0">
          <h4 className="font-bold">Kontak Kami</h4>
          <div className="flex gap-3">
            <Link
              href={"https://www.instagram.com"}
              className="p-2 bg-slate-100 rounded-full text-primary"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href={"https://www.facebook.com"}
              className="p-2 bg-slate-100 rounded-full text-primary"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@coswatransport"
              className="p-2 bg-slate-100 rounded-full text-primary"
            >
              <Image
                width={24}
                height={24}
                src="/images/tik-tok.png"
                alt="Tiktok"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full font-medium text-quaternary text-center mt-16">
        <p>Copyright © {new Date().getFullYear()} Coswa</p>
        <p>All right reversed</p>
      </div>
    </div>
  )
}
