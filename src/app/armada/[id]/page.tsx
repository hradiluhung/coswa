"use client"
import {
  Harga,
  HargaObj,
  armadaList,
  listHarga,
  destinationLocations,
  pickupLocations,
} from "../armada-list"
import { ArrowLeftCircle, Users, X } from "react-feather"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<String | null>(null)
  const [selectedDestinationLocation, setSelectedDestinationLocation] =
    useState("")
  const [selectedPickupLocation, setSelectedPickupLocation] = useState("")
  const [selectedDurasi, setSelectedDurasi] = useState("")
  const [listDurasi, setListDurasi] = useState<String[]>([])
  const [estimasiHarga, setEstimasiHarga] = useState(0)
  const armada = armadaList.find((armada) => armada.id === parseInt(params.id))
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSelectedPlaceChange = (value: string) => {
    setSelectedDestinationLocation(value)
  }

  const onSelectedDurasiChange = (value: string) => {
    setSelectedDurasi(value)
  }

  const onSelectedPickupLocation = (value: string) => {
    setSelectedPickupLocation(value)
  }

  useEffect(() => {
    for (const key in listHarga) {
      if (key.includes(selectedDestinationLocation)) {
        const data = listHarga[key].map((item: HargaObj) => item.durasi)
        setListDurasi(data)
      }
    }
  }, [selectedDestinationLocation])

  useEffect(() => {
    let additionalPrice = 0

    if (
      selectedPickupLocation === "Tangerang Kota" ||
      selectedPickupLocation === "Bogor" ||
      selectedPickupLocation === "Sentul"
    ) {
      additionalPrice = 500000
    } else if (selectedPickupLocation === "Tangerang Kabupaten") {
      additionalPrice = 800000
    }

    if (
      selectedPickupLocation !== "" &&
      selectedDestinationLocation === "Transfer In/Out Soekarno Hatta" &&
      armada &&
      armada.size
    ) {
      const harga =
        listHarga["Transfer In/Out Soekarno Hatta"][0].harga[
          armada.size as keyof Harga
        ]
      setEstimasiHarga(harga + additionalPrice)
    } else {
      if (
        selectedPickupLocation !== "" &&
        selectedDestinationLocation !== "" &&
        selectedDurasi !== "" &&
        armada &&
        armada.size
      ) {
        for (const key in listHarga) {
          if (key.includes(selectedDestinationLocation)) {
            const data = listHarga[key].find(
              (item: HargaObj) => item.durasi === selectedDurasi
            )
            if (data) {
              const harga = data.harga[armada.size as keyof Harga]
              setEstimasiHarga(harga + additionalPrice)
            }
          }
        }
      } else {
        setEstimasiHarga(0)
      }
    }
  }, [
    selectedDestinationLocation,
    selectedDurasi,
    selectedPickupLocation,
    armada,
  ])

  function formatRupiah(angka: number): string {
    const rupiah = angka.toString().split("").reverse().join("")
    let hasil = ""
    for (let i = 0; i < rupiah.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        hasil += "."
      }
      hasil += rupiah[i]
    }
    return "Rp " + hasil.split("").reverse().join("")
  }

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
                    Pelunasan paling lambat 2 hari sebelum keberangkatan.
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
              <h3 className="font-title font-semibold text-2xl">
                Cek Estimasi Harga
              </h3>
              <div className="flex flex-col gap-4 mt-6">
                <select
                  className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg"
                  onChange={(e) => {
                    onSelectedPickupLocation(e.target.value)
                  }}
                >
                  <option value="" className="text-quaternary">
                    Area penjemputan
                  </option>
                  {pickupLocations.sort().map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg"
                  onChange={(e) => {
                    onSelectedPlaceChange(e.target.value)
                  }}
                >
                  <option value="" className="text-quaternary">
                    Pilih Kota
                  </option>
                  {destinationLocations.sort().map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg"
                  disabled={
                    selectedDestinationLocation ===
                      "Transfer In/Out Soekarno Hatta" ||
                    selectedDestinationLocation === ""
                  }
                  onChange={(e) => {
                    onSelectedDurasiChange(e.target.value)
                  }}
                >
                  <option value="" className="text-quaternary">
                    Pilih Durasi
                  </option>

                  {listDurasi.map((durasi, index) => (
                    <option key={index} value={durasi.toString()}>
                      {durasi.toString()}
                    </option>
                  ))}
                </select>

                <input
                  className="w-full cursor-pointer border text-lg border-slate-300 px-4 py-3 rounded-lg disabled:text-slate-800"
                  value={
                    estimasiHarga === 0
                      ? "Estimasi Harga"
                      : formatRupiah(estimasiHarga)
                  }
                  disabled
                />
                <button
                  className="w-full bg-primary text-white rounded-lg px-4 py-3 text-lg disabled:opacity-20"
                  disabled={
                    selectedDestinationLocation ===
                    "Transfer In/Out Soekarno Hatta"
                      ? selectedPickupLocation === ""
                      : selectedDurasi === "" ||
                        selectedDestinationLocation === "" ||
                        selectedPickupLocation === ""
                  }
                  onClick={() => setIsModalOpen(true)}
                >
                  Dapatkan penawaran terbaik
                </button>
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

      {isModalOpen && armada != undefined && (
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
                href={`https://wa.me/628119890411?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
                className="cursor-pointer bg-button-gradient p-2 font-medium text-white rounded-2xl"
              >
                Coswa Cikarang - Mas Arif: 08119890411
              </Link>
              <Link
                href={`https://wa.me/628119530411?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
                className="cursor-pointer bg-button-gradient p-2 font-medium text-white rounded-2xl"
              >
                Coswa Ciamis - Mas Maman: 08119530411
              </Link>

              <Link
                href={`https://wa.me/6285281173470?text=Halo%20saya%20ingin%20menyewa%20${armada.name}`}
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
