import Image from "next/image"
import { Mail, Search } from "react-feather"
import { reasonItems } from "./reason-items"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Image
        src="/images/blub.png"
        width={800}
        height={300}
        alt="Home Image"
        className="absolute top-0 right-0 object-cover z-[-1]"
      />
      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-6 md:basis-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="font-title text-5xl font-semibold">
              Perjalanan lebih asik dengan pelayanan terbaik
            </h1>
            <p className="text-lg">
              Coswa Transportation adalah sahabat di setiap perjalanan.
              Terpercaya melayani berbagai kebutuhan perjalanan dengan armada
              unggulan. Profesionalitas crew armada siap diandalkan untuk
              memastikan kenyamanan sampai tujuan.
            </p>
          </div>
          <div className="flex gap-9 items-center">
            <Link href="https://wa.me/6285281173470">
              <button className="px-6 py-4 bg-secondary transition-all duration-300 text-white rounded-xl hover:shadow-lg hover:shadow-secondary/50">
                Hubungi Kami
              </button>
            </Link>

            <Link href="/armada">
              <button className="group flex gap-3 items-center">
                <div className="flex justify-center transition-all duration-300 items-center p-3 rounded-full bg-tetriary text-white group-hover:shadow-lg group-hover:shadow-tetriary/50">
                  <Search size={24} />
                </div>
                <p className="font-medium text-lg">Lihat Armada</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="md:basis-1/2">
          <Image
            src={"/images/hero.png"}
            width={2000}
            height={500}
            alt="Home Image"
          />
        </div>
      </section>

      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-4 md:gap-0 items-center justify-center">
        <div className="relative">
          <Image
            src="/images/dots.png"
            width={100}
            height={120}
            alt="Home Image"
            className="absolute -top-10 -end-12 object-cover z-[-1]"
          />
          <h2 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl max-w-3xl">
            Mengapa mempercayakan Coswa Transport sebagai teman perjalanan anda?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-16 gap-9">
          {reasonItems.map((item, index) => (
            <div
              key={index}
              className="p-9 flex flex-col bg-white items-center rounded-3xl justify-center text-center gap-8 group transition-all duration-300 hover:shadow-myShadow relative"
            >
              <div className="relative">
                <div className="bg-[color:#D8DDFF] w-16 h-16 rounded-tl-md rounded-tr-sm rounded-bl-sm rounded-br-3xl absolute -bottom-4 -end-4 z-0"></div>
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="Home Image"
                  className="relative"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-title font-semibold md:text-2xl">
                  {item.title}
                </h3>
                <p className="font-medium text-quaternary">
                  {item.description}
                </p>
              </div>

              <div className="bg-tetriary transition-transform w-24 h-24 rounded-tl-md rounded-tr-sm rounded-bl-md rounded-br-3xl absolute bottom-2 left-2 -z-10 md:group-hover:-translate-x-9 md:group-hover:translate-y-9"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 md:px-12 md:py-12 lg:px-32 lg:py-24 flex flex-col gap-4 md:gap-0 items-center justify-center">
        <div className="bg-quinary w-full py-12 px-12 md:py-12 md:px-24 lg:py-16 lg:px-32 rounded-tl-[128px] rounded-tr-[64px] rounded-br-[64px] relative overflow-hidden">
          <Image
            src="/images/bg-subscribe.png"
            width={400}
            height={400}
            alt="Home Image"
            className="absolute -bottom-36 -left-36 object-cover"
          />
          <div className="relative w-full flex flex-col items-center justify-center">
            <h1 className="font-title text-2xl md:text-4xl text-center font-semibold max-w-2xl">
              Tertarik untuk selalu mendapatkan update dari kami?
            </h1>
            <div className="mt-8 flex gap-4 w-full lg:px-16 flex-col md:flex-row">
              <div className="bg-white flex  gap-6 py-5 px-9 rounded-2xl w-full">
                <Mail size={24} />
                <input
                  type="text"
                  placeholder="Email Anda"
                  className="focus:outline-none w-full"
                ></input>
              </div>
              <button className="bg-button-gradient px-11 py-5 font-medium text-white rounded-2xl">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
