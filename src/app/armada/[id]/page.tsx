"use client"
import { armadaList } from "../armada-list"
import { ArrowLeftCircle, Users, X } from "react-feather"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const armada = armadaList.filter((_, index) => index === Number(params.id))[0]

  return (
    <>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-12 md:gap-0">
        <div className="flex gap-4 items-start">
          <ArrowLeftCircle
            className="text-primary mt-2"
            onClick={() => router.back()}
          />
          <div>
            <h1 className="font-title text-4xl font-semibold">{armada.name}</h1>

            <div className="flex gap-4 items-center mt-1 text-quaternary">
              <Users className="w-4 h-4" />
              <p>Kapasitas {armada.capacity}</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
          <Image
            width={200}
            height={200}
            src={armada.image}
            alt="stack-card-bg"
            className="cursor-pointer object-cover rounded-xl w-full h-full col-span-2 row-span-2"
            onClick={() => setIsModalOpen(true)}
          />
          <Image
            width={200}
            height={200}
            src={armada.image}
            alt="stack-card-bg"
            className="cursor-pointer object-cover rounded-xl w-full h-full col-span-1"
            onClick={() => setIsModalOpen(true)}
          />
          <Image
            width={200}
            height={200}
            src={armada.image}
            alt="stack-card-bg"
            className="cursor-pointer object-cover rounded-xl w-full h-full col-span-1"
            onClick={() => setIsModalOpen(true)}
          />
          <Image
            width={200}
            height={200}
            src={armada.image}
            alt="stack-card-bg"
            className="cursor-pointer object-cover rounded-xl w-full h-full col-span-1"
            onClick={() => setIsModalOpen(true)}
          />
          <Image
            width={200}
            height={200}
            src={armada.image}
            alt="stack-card-bg"
            className="cursor-pointer object-cover rounded-xl w-full h-full col-span-1"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className="w-full mt-12 gap-12 justify-between items-start flex lg:flex-row flex-col">
          <div className="basis-2/3">
            <h2 className="font-title font-semibold text-xl">Deskripsi</h2>
            <p className="mt-4 text-quaternary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="bg-quinary p-8 rounded-xl mt-8">
              <h2 className="font-title font-semibold text-2xl">Fasilitas</h2>
              <ul className="grid grid-cols-2 gap-4 mt-4 list-disc pl-6">
                {armada.facilities.map((facility, index) => (
                  <li key={index}>
                    <p className="text-lg">{facility}</p>
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="font-title font-semibold text-xl mt-8">Catatan</h2>
            <ul className="flex flex-col gap-4 mt-4 list-disc pl-6">
              <li>
                <p className="text-lg">
                  Dp tanda jadi sebesar 20% dari harga sewa.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Pelunasan paling lambat 7 hari sebelum keberangkatan.
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Apabila terjadi perubahan jadwal diharapkan untuk
                  mengkonfirmasi kepada kami paling lambat 8 hari sebelum
                  keberangkatan.
                </p>
              </li>
            </ul>
          </div>

          {/* Cek Harga Card */}
          <div className="p-8 bg-[color:#FFF1DA] basis-1/3 rounded-xl shadow-sm sticky top-24 self-start">
            <h3 className="font-title font-semibold text-2xl">Cek Harga</h3>
            <div className="flex flex-col gap-4 mt-6">
              <select className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg">
                <option value="" className="text-quaternary">
                  Pilih Kota
                </option>
                <option value="Bogor">Bogor</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Bekasi">Bekasi</option>
              </select>

              <select className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg">
                <option value="" className="text-quaternary">
                  Pilih Tujuan
                </option>
                <option value="1">Bandara Soekarno Hatta</option>
                <option value="2">Bandara Halim Perdana Kusuma</option>
                <option value="3">Stasiun Gambir</option>
                <option value="4">Stasiun Bogor</option>
              </select>

              <button className="bg-primary text-white rounded-lg px-4 py-3 text-lg">
                Cek Harga
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full md:w-auto md:h-2/3 m-2 md:m-4 lg:m-6 relative">
            <X
              className="absolute top-4 right-4 cursor-pointer stroke-white bg-red-600 rounded-full"
              onClick={() => setIsModalOpen(false)}
            />
            <Image
              width={200}
              height={200}
              src={armada.image}
              alt="stack-card-bg"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
