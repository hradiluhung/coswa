"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Facebook, Instagram, Mail, MapPin, Phone, X } from "react-feather"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col lg:flex-row gap-12 items-center justify-between">
        <div className="basis-1/2">
          <div className="relative">
            <h1 className="text-quaternary">Hubungi Kami</h1>
            <h1 className="font-title normal-case text-4xl font-semibold mt-2">
              Jalinkan persaudaraan, alirkan keberkahan
            </h1>
            <Image
              src="/images/dots.png"
              width={100}
              height={120}
              alt="Home Image"
              className="absolute -top-10 -end-12 object-cover z-[-1]"
            />
          </div>
          <p className="text-xl mt-6">
            Jangan segan dan malu untuk berkonsultasi dengan kami karena kami
            selalu siap membantu anda. Silakan menghubungi kami di kontak
            tertera atau mengunjungi kami di alamat yang disediakan. Kepuasan
            anda adalah prioritas kami.
          </p>
        </div>
        <div className="basis-1/2">
          <div
            style={{
              width: "100%",
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/armadas/Al Fatih/1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Home Image"
              className="w-full object-cover h-full"
            />
          </div>
        </div>
      </section>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-12 items-center justify-center">
        <h1 className="font-title font-semibold text-3xl">Kontak Kami</h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Link
            href="https://g.co/kgs/LwTeuRj"
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start"
          >
            <div>
              <MapPin size={24} />
            </div>
            <div>
              <h1 className="font-title font-semibold">Kantor Utama</h1>
              <p className="mt-2">
                Jalan H. Saweh Desa Sukadami Kec. Cikarang Selatan Kabupaten
                Bekasi Jawa Barat Kode Pos 17530
              </p>
            </div>
          </Link>
          <Link
            href="mailto://coswatransportation92@gmail.com"
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start"
          >
            <div>
              <Mail size={24} />
            </div>
            <div>
              <h1 className="font-title font-semibold">Email</h1>
              <p className="mt-2">coswatransportation92@gmail.com</p>
            </div>
          </Link>
          <div
            onClick={() => {
              setIsModalOpen(true)
            }}
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start cursor-pointer"
          >
            <div>
              <Phone size={24} />
            </div>
            <div>
              <h1 className="font-title font-semibold">Admin</h1>
              <ul className="mt-2 gap-4 marker:text-[color:var(--quaternary)] list-disc pl-6">
                <li>Coswa Cikarang - Mas Arif: 08119890411</li>
                <li>Coswa Ciamis - Mas Maman: 08119530411</li>
                <li>Admin - Mas Iqbal: 085281173470</li>
              </ul>
            </div>
          </div>
          <Link
            href="https://www.instagram.com/coswa.transport"
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start"
          >
            <div>
              <Instagram size={24} />
            </div>
            <div>
              <h1 className="font-title font-semibold">Instagram</h1>
              <p className="mt-2">@coswa.transport</p>
            </div>
          </Link>
          <Link
            href="https://web.facebook.com/profile.php?id=100094541694248"
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start"
          >
            <div>
              <Facebook size={24} />
            </div>
            <div>
              <h1 className="font-title font-semibold">Facebook</h1>
              <p className="mt-2">Coswa Transportation</p>
            </div>
          </Link>

          <Link
            href="https://www.tiktok.com/@coswatransport"
            className="p-4 border border-primary w-full h-full hover:bg-quinary transition-all duration-300 rounded-2xl flex flex-col gap-6 justify-between items-start"
          >
            <div>
              <Image
                width={24}
                height={24}
                src="/images/tik-tok.png"
                alt="Tiktok"
              />
            </div>
            <div>
              <h1 className="font-title font-semibold">Tiktok</h1>
              <p className="mt-2">@coswatransport</p>
            </div>
          </Link>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-2xl">
            <div className="w-full flex justify-between gap-6 items-center">
              <h1 className="font-title font-semibold text-2xl">
                Siapa yang ingin anda hubungi?
              </h1>
              <X
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-4 gap-2 w-full text-center flex flex-col">
              <Link
                href="https://wa.me/628119890411"
                className="cursor-pointer bg-button-gradient p-2 font-medium text-white rounded-2xl"
              >
                Coswa Cikarang - Mas Arif: 08119890411
              </Link>
              <Link
                href="https://wa.me/628119530411"
                className="cursor-pointer bg-button-gradient p-2 font-medium text-white rounded-2xl"
              >
                Coswa Ciamis - Mas Maman: 08119530411
              </Link>

              <Link
                href="https://wa.me/6285281173470"
                className="cursor-pointer bg-button-gradient p-2 font-medium text-white rounded-2xl"
              >
                Admin - Mas Iqbal: 085281173470
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
