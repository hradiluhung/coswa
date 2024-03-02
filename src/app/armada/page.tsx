"use client"
import React, { useEffect, useState } from "react"
import { armadaList } from "./armada-list"
import Image from "next/image"
import { Users } from "react-feather"
import Link from "next/link"

export default function Page() {
  const [filterArmada, setFilterArmada] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterArmada(e.target.value)
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-12 md:gap-0 items-center justify-center text-center bg-tetriary text-white">
        <div className="relative">
          <h1 className="font-title normal-case text-4xl font-semibold">
            Armada Pilihan Membuat Perjalanmu Lebih Aman
          </h1>
          <Image
            src="/images/dots.png"
            width={100}
            height={120}
            alt="Home Image"
            className="absolute -top-10 -end-12 object-cover z-[-1]"
          />
        </div>
        <p className="text-2xl mt-6">
          Komitmen kami adalah untuk memberikan armada dengan fasilitas lengkap
          dan terawat. Kami menjamin mutu kebersihan dan peremajaan setiap bus
          pilihan kami. Pilih armada dengan konfigurasi tempat duduk sesuai
          dengan kebutuhanmu.
        </p>
      </section>
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:pt-24   lg:pb-24 flex flex-col gap-12 md:gap-0 items-center justify-center">
        <div className="w-full flex-col md:flex-row flex gap-4 justify-center">
          <input
            className="border border-slate-300 px-4 py-2 rounded-xl"
            type="text"
            placeholder="Cari Armada"
            onChange={onSearchChange}
          />
          <select
            className="cursor-pointer border border-slate-300 px-4 py-2 rounded-xl"
            onChange={onFilterChange}
          >
            <option value="">Semua Ukuran</option>
            <option value="big">Big Bus</option>
            <option value="medium">Medium Bus</option>
          </select>
        </div>

        <div className="flex flex-col gap-36 mt-16 items-center justify-center">
          {(filterArmada == "" || filterArmada == "big") && (
            <div>
              <h1 className="font-title font-semibold text-3xl text-center">
                Big Bus
              </h1>
              <p className="text-quaternary mt-6 text-center">
                Big Bus adalah solusi bagi perjalanan wisata keluarga, ziarah,
                study tour, kunjungan kerja, antar jemput karyawan dan berbagai
                keperluan perjalanan lainnya yang menghajatkan kapasitas
                penumpang yang besar. Fasilitas yang lengkap dan terawat adalah
                usaha kami untuk memastikan perjalanan anda selalu istimewa.
              </p>
              <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {armadaList
                  .filter((armada) => armada.size === "big")
                  .filter((armada) => {
                    if (searchQuery === "") {
                      return armada
                    }

                    if (
                      armada.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) {
                      return armada
                    }
                  })
                  .map((armada, index) => {
                    return (
                      <div
                        key={index}
                        className="shadow-myShadow bg-whiterounded-xl relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                      >
                        <Image
                          width={200}
                          height={200}
                          src={armada.imageFolder + "/1.jpg"}
                          alt="stack-card-bg"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h2 className="font-title font-semibold text-xl">
                            {armada.name}
                          </h2>
                          <div className="flex gap-4 items-center mt-1 text-quaternary">
                            <Users className="w-4 h-4" />
                            <p>Kapasitas {armada.capacity}</p>
                          </div>
                          <div className="mt-6 flex justify-between items-center">
                            <div>
                              <p>Mulai dari</p>
                              <p className="font-semibold">{armada.price}</p>
                            </div>
                            <div>
                              <Link href={`/armada/${index}`}>
                                <button className="bg-button-gradient px-4 py-2 font-medium text-white rounded-2xl">
                                  Lihat Detail
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
              {armadaList.length > 0 &&
                armadaList
                  .filter((armada) => armada.size === "big")
                  .filter((armada) => {
                    if (searchQuery === "") {
                      return armada
                    }

                    if (
                      armada.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) {
                      return armada
                    }
                  }).length === 0 && (
                  <p className="italic text-quaternary text-center w-full">
                    Tidak ada armada yang ditemukan
                  </p>
                )}
            </div>
          )}

          {(filterArmada == "" || filterArmada == "medium") && (
            <div>
              <h1 className="font-title font-semibold text-3xl text-center">
                Medium Bus
              </h1>
              <p className="text-quaternary mt-6 text-center">
                Big Bus adalah solusi bagi perjalanan wisata keluarga, ziarah,
                study tour, kunjungan kerja, antar jemput karyawan dan berbagai
                keperluan perjalanan lainnya yang menghajatkan kapasitas
                penumpang yang besar. Fasilitas yang lengkap dan terawat adalah
                usaha kami untuk memastikan perjalanan anda selalu istimewa.
              </p>
              <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {armadaList
                  .filter((armada) => armada.size === "medium")
                  .filter((armada) => {
                    if (searchQuery === "") {
                      return armada
                    }

                    if (
                      armada.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) {
                      return armada
                    }
                  })
                  .map((armada, index) => {
                    return (
                      <div
                        key={index}
                        className="shadow-myShadow bg-whiterounded-xl relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                      >
                        <Image
                          width={200}
                          height={200}
                          src={armada.imageFolder + "/1.jpg"}
                          alt="stack-card-bg"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h2 className="font-title font-semibold text-xl">
                            {armada.name}
                          </h2>
                          <div className="flex gap-4 items-center mt-1 text-quaternary">
                            <Users className="w-4 h-4" />
                            <p>Kapasitas {armada.capacity}</p>
                          </div>
                          <div className="mt-6 flex justify-between items-center">
                            <div>
                              <p>Mulai dari</p>
                              <p className="font-semibold">{armada.price}</p>
                            </div>
                            <div>
                              <Link href={`/armada/${index}`}>
                                <button className="bg-button-gradient px-4 py-2 font-medium text-white rounded-2xl">
                                  Lihat Detail
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
              {armadaList.length > 0 &&
                armadaList
                  .filter((armada) => armada.size === "medium")
                  .filter((armada) => {
                    if (searchQuery === "") {
                      return armada
                    }

                    if (
                      armada.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) {
                      return armada
                    }
                  }).length === 0 && (
                  <p className="italic text-quaternary text-center w-full">
                    Tidak ada armada yang ditemukan
                  </p>
                )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
