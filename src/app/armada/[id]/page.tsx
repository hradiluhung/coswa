"use client"
import { armadaList } from "../armada-list"
import { ArrowLeftCircle, Users, X } from "react-feather"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<String | null>(null)
  const armada = armadaList.find((armada) => armada.id === parseInt(params.id))

  return (
    <>
      {armada !== undefined && (
        <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-12 md:gap-0">
          <div className="flex gap-4 items-start">
            <ArrowLeftCircle
              className="text-primary mt-2"
              onClick={() => router.back()}
            />
            <div>
              <h1 className="font-title text-4xl font-semibold">
                {armada.name}
              </h1>

              <div className="flex gap-4 items-center mt-1 text-quaternary">
                <Users className="w-4 h-4" />
                <p>Kapasitas {armada.capacity}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-12">
            <Image
              width={1500}
              height={800}
              src={armada.imageFolder + "/1.jpg"}
              alt="stack-card-bg"
              className="cursor-pointer object-cover rounded-xl w-full col-span-2 row-span-2"
              style={{
                height: "412px",
              }}
              onClick={() => setSelectedImage(armada.imageFolder + "/1.jpg")}
            />
            <Image
              width={1500}
              height={800}
              src={armada.imageFolder + "/2.jpg"}
              alt="stack-card-bg"
              className="cursor-pointer object-cover rounded-xl w-full h-48 col-span-2 lg:col-span-1"
              onClick={() => setSelectedImage(armada.imageFolder + "/2.jpg")}
            />
            <Image
              width={1500}
              height={800}
              src={armada.imageFolder + "/3.jpg"}
              alt="stack-card-bg"
              className="cursor-pointer object-cover rounded-xl w-full h-48 col-span-2 lg:col-span-1"
              onClick={() => setSelectedImage(armada.imageFolder + "/3.jpg")}
            />
            <Image
              width={1500}
              height={800}
              src={armada.imageFolder + "/4.jpg"}
              alt="stack-card-bg"
              className="cursor-pointer object-cover rounded-xl w-full h-48 col-span-2 lg:col-span-1"
              onClick={() => setSelectedImage(armada.imageFolder + "/4.jpg")}
            />
            <Image
              width={1500}
              height={800}
              src={armada.imageFolder + "/5.jpg"}
              alt="stack-card-bg"
              className="cursor-pointer object-cover rounded-xl w-full h-48 col-span-2 lg:col-span-1"
              onClick={() => setSelectedImage(armada.imageFolder + "/5.jpg")}
            />
          </div>
          <div className="w-full mt-12 gap-12 justify-between items-start flex md:flex-row flex-col">
            <div className="basis-2/3">
              <div className="bg-quinary p-8 rounded-xl">
                <h2 className="font-title font-semibold text-2xl">Fasilitas</h2>
                <ul className="grid md:grid-cols-2 gap-4 mt-4 list-disc pl-6">
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
            <div className="p-8 bg-[color:#FFF1DA] basis-full w-full md:basis-1/3 rounded-xl shadow-sm sticky top-24 self-start">
              <h3 className="font-title font-semibold text-2xl">
                Hubungi Kami
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href={`https://wa.me/6285281173470?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
                  className="bg-button-gradient text-center text-white rounded-lg px-4 py-3 text-lg"
                >
                  Admin 1
                </Link>
                <Link
                  href={`https://wa.me/628119530411?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
                  className="bg-button-gradient text-center text-white rounded-lg px-4 py-3 text-lg"
                >
                  Admin 2
                </Link>

                <Link
                  href={`https://wa.me/628119890411?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
                  className="bg-button-gradient text-center text-white rounded-lg px-4 py-3 text-lg"
                >
                  Admin 3
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full md:w-auto md:h-5/6 m-2 md:m-4 lg:m-6 relative">
            <X
              className="absolute top-4 right-4 cursor-pointer stroke-white bg-red-600 rounded-full"
              onClick={() => setSelectedImage(null)}
            />
            <Image
              width={2000}
              height={2000}
              src={selectedImage.toString()}
              alt="stack-card-bg"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
