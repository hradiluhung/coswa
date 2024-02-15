"use client"
import { useState } from "react"
import { aboutItems } from "./about-items"
import StackedCards from "@/components/stack-card/StackCard"

export default function Page() {
  return (
    <>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-36 flex flex-col md:flex-row md:gap-0 items-center justify-between gap-16">
        <div className="basis-full md:basis-1/2">
          <h2 className="font-title font-semibold text-6xl">Tentang Kami</h2>
          <p className="font-medium text-quaternary mt-2 text-lg">
            Coswa Transportation Sahabat di setiap perjalanan
          </p>
        </div>

        <div className="basis-full md:basis-1/2">
          <StackedCards items={aboutItems} />
        </div>
      </section>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:pt-24 lg:pb-48 flex flex-col md:flex-row md:gap-0 items-center justify-between gap-24">
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-24">
          <div className="flex flex-col md:justify-end md:items-end md:text-end gap-6 basis-1/2">
            <h2 className="font-title font-semibold text-5xl">Visi</h2>
            <p className="font-medium text-lg">
              Coswa Transportation menjadi penyedia jasa transportasi yang
              berorientasi pada kebermanfaatan dan keberkahan bagi seluruh unsur
              yang terlibat dengan mengutamakan kepuasan dan kenyamanan
              pelanggan.
            </p>
          </div>
          <div className="flex flex-col gap-6 basis-1/2">
            <h2 className="font-title font-semibold text-5xl">Misi</h2>

            <p className="font-medium text-lg">
              Kami berkomitmen untuk terus berproses mengimprovisasi segala
              aspek demi tercapainya visi tersebut, yang antara lain:
            </p>
            <ul className="font-medium text-lg list-disc pl-6 marker:text-[color:#FFF1DA] marker:text-4xl">
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
