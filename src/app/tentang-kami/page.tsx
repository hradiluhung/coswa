"use client"
import { useState } from "react"
import { aboutItems } from "./about-items"
import StackedCards from "@/components/stack-card/StackCard"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:pt-24 lg:pb-0 flex flex-col items-center justify-between gap-24">
        <div className="flex justify-between flex-col md:flex-row gap-16 w-full items-center relative">
          <div className="basis-full md:basis-1/2">
            <p className="font-medium text-quaternary mt-2 text-lg">
              Tentang Kami
            </p>
            <h2 className="font-title font-semibold text-5xl mt-2">
              Coswa Transportation Sahabat di setiap perjalanan
            </h2>

            <Image
              src="/images/dots.png"
              width={100}
              height={120}
              alt="Home Image"
              className="absolute -top-10 -end-12 object-cover z-[-1]"
            />
          </div>

          <div className="basis-full md:basis-1/2 p-6 flex justify-end items-center">
            <Image
              src="/images/logo/logo_text_1.png"
              width={300}
              height={50}
              alt="Logo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-start items-stretch">
          {aboutItems.map((item, index) => (
            <div key={index}>
              <h3 className="h-full p-8 text-lg bg-white border border-primary rounded-xl shadow-md">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full -mt-60 -z-20 bg-tetriary relative h-80 md:h-500"></section>

      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:pt-0 lg:pb-48 -mt-36 flex flex-col md:flex-row md:gap-0 items-center justify-between gap-24">
        <div className="w-full py-12 px-12 md:py-12 md:px-24 lg:py-16 lg:px-32 rounded-tl-[128px] rounded-tr-[64px] rounded-br-[64px] relative overflow-hidden flex flex-col md:flex-row justify-start items-start gap-24 bg-white border border-primary">
          <div className="flex flex-col md:justify-end md:items-end md:text-end gap-6 basis-1/2 text-quaternary">
            <h2 className="font-title font-semibold text-5xl text-primary">
              Visi
            </h2>
            <p className="font-medium text-lg">
              Coswa Transportation menjadi penyedia jasa transportasi yang
              berorientasi pada kebermanfaatan dan keberkahan bagi seluruh unsur
              yang terlibat dengan mengutamakan kepuasan dan kenyamanan
              pelanggan.
            </p>
          </div>
          <div className="flex flex-col gap-6 basis-1/2 text-quaternary">
            <h2 className="font-title font-semibold text-5xl text-primary">
              Misi
            </h2>

            <p className="font-medium text-lg">
              Kami berkomitmen untuk terus berproses mengimprovisasi segala
              aspek demi tercapainya visi tersebut, yang antara lain:
            </p>
            <ul className="font-medium text-lg list-disc pl-6 marker:text-primary marker:text-xl">
              <li>Peremajaan unit-unit armada</li>
              <li>Pengembangan layanan dan sumber daya manusia</li>
              <li>Pemerhatian kinerja dan kesejahteraan pengemudi dan crew</li>
              <li>
                Berpegang teguh pada prinsip-prinsip kejujuran dan moralitas
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
