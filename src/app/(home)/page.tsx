import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <div className="px-28 py-8 flex justify-between items-center bg-slate-100">
        <div className="flex justify-start items-center gap-4">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logo_coswa.png"
            alt="logo"
            className="w-10"
          />
          <p className="font-semibold text-lg">Coswa</p>
        </div>
        <div className="flex gap-12">
          <Link href="/">
            <p className="transition hover:text-green-500 font-semibold">
              Home
            </p>
          </Link>
          <Link href="/tentang-kami">
            <p className="transition hover:text-green-500">Tentang Kami</p>
          </Link>
          <Link href="/armada">
            <p className="transition hover:text-green-500">Armada</p>
          </Link>
          <Link href="/hubungi-kami">
            <p className="transition hover:text-green-500">Hubungi Kami</p>
          </Link>
        </div>
      </div>
      {/* END OF NAVBAR */}

      {/* HERO */}
      <div className="bg-slate-100 px-28 py-24 flex justify-between items-center gap-12">
        <div className="w-1/2">
          <div className="w-full">
            <span className="font-extrabold text-6xl">
              Rosalia <span className="text-green-500">Ganteng</span>
            </span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              dictum varius duis at consectetur lorem donec. Elit at imperdiet
              dui accumsan.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-green-500 px-6 py-2 rounded-md text-white">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-1/2 rounded-3xl overflow-hidden">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/image_1.png"
            alt="logo"
            className="w-full"
          />
        </div>
      </div>
      {/* END OF HERO */}

      {/* SECTION 1 */}
      <div>
        <div>
          <p>Our Passengers</p>
          <p>We have served more than 10000+ passengers</p>
        </div>
        <div>
          <p>Our Passengers</p>
          <p>We have served more than 10000+ passengers</p>
        </div>
      </div>
      {/* END OF SECTION 1 */}
    </main>
  )
}
