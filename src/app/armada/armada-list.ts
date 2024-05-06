export const armadaList = [
  {
    id: 1,
    name: "Big Bus 001 Al Mubdi",
    imageFolder: "/images/armadas/Al Mubdi",
    type: "JetBus 2 HDD Adiputro",
    capacity: "48-59",
    price: "Rp 2.200.000",
    size: "big",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Karaoke",
      "Charger",
      "Dispense",
    ],
  },
  {
    id: 2,
    name: "Medium Long 002 Al Qowiyyu",
    imageFolder: "/images/armadas/Al Qowiyyu",
    type: "JetBus 1 Single Glass Morodadi",
    capacity: "40-45",
    price: "Rp 2.000.000",
    size: "medium",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Karaoke",
      "Charger",
    ],
  },
  {
    id: 3,
    name: "Big Bus 003 Ar Razzaq",
    imageFolder: "/images/armadas/Ar Razzaq",
    type: "JetBus 3 HDD Adiputro",
    capacity: "48-59",
    price: "Rp 2.200.000",
    size: "big",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Karaoke",
      "Charger",
      "Telolet",
    ],
  },
  {
    id: 4,
    name: "Big Bus 004 Al Fatih",
    imageFolder: "/images/armadas/Al Fatih",
    type: "Avante H9 Tentrem",
    capacity: "48-59",
    price: "Rp 2.200.000",
    size: "big",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Karaoke",
      "Charger",
      "Telolet",
    ],
  },
  {
    id: 5,
    name: "Big Bus 007 Ar Rafah",
    imageFolder: "/images/armadas/Ar Rafah",
    type: "JetBus 3 HDD Adiputro",
    capacity: "48-59",
    price: "Rp 2.200.000",
    size: "big",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Dispenser",
      "Karaoke",
      "Charger",
      "Telolet",
    ],
  },
  {
    id: 6,
    name: "Big Bus 008 Al Baa'its",
    imageFolder: "/images/armadas/Al Baa'its",
    type: "JetBus 3 HDD Adiputro",
    capacity: "48-59",
    price: "Rp 2.200.000",
    size: "big",
    facilities: [
      "Unit Fresh",
      "Bisa Request seat 2-3 atau 2-2",
      "AC",
      "Audio",
      "Smart TV",
      "Dispenser",
      "Karaoke",
      "Charger",
      "Telolet",
    ],
  },
]

// Definisi tipe data untuk harga
export interface Harga {
  big: number
  medium: number
}

// Definisi tipe data untuk objek harga
export interface HargaObj {
  durasi: string
  harga: Harga
}

// Definisi tipe data untuk objek daftar harga
export interface ListHarga {
  [tempat: string]: HargaObj[]
}

export const listHarga: ListHarga = {
  "Transfer In/Out Soekarno Hatta": [
    {
      durasi: "",
      harga: {
        big: 2000000,
        medium: 2000000,
      },
    },
  ],
  "Dalam Kota Jakarta, Bekasi": [
    {
      durasi: "1 Hari",
      harga: {
        big: 2200000,
        medium: 2200000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 4000000,
        medium: 4000000,
      },
    },
  ],
  "Tangerang, Depok, Karawaci, Cikupa, Karawang, Bogor": [
    {
      durasi: "1 Hari",
      harga: {
        big: 2700000,
        medium: 2700000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 5000000,
        medium: 5000000,
      },
    },
  ],
  "Taman Matahari, Cimory, Gadog, Puncak, Cisarua": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3000000,
        medium: 3000000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 5800000,
        medium: 5800000,
      },
    },
  ],
  "Cipanas, Cibodas, Lido, Purwakarta, Cikampek": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3200000,
        medium: 3200000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6000000,
        medium: 6000000,
      },
    },
  ],
  "Bandung, Lembang, Sukabumi, Cianjur, Anyer, Carita, Subang": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3600000,
        medium: 3600000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6500000,
        medium: 6500000,
      },
    },
  ],
  "Sumedang, Pangalengan, Kawah Putih, Ciwidey, Pel. Ratu, TJ. Lesung": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3900000,
        medium: 3900000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6900000,
        medium: 6900000,
      },
    },
  ],
  "Garut, Kuningan, Cirebon, Majalengka": [
    {
      durasi: "1 Hari",
      harga: {
        big: 4300000,
        medium: 4300000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 7000000,
        medium: 7000000,
      },
    },
  ],
  "Ziarah Banten": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3800000,
        medium: 3800000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6800000,
        medium: 6800000,
      },
    },
  ],
  "Cirebon, Panjalu, Pamijahan": [
    {
      durasi: "2 Hari",
      harga: {
        big: 7500000,
        medium: 7500000,
      },
    },
  ],
  "Panjalu, Pamijahan, Haruman": [
    {
      durasi: "2 Hari",
      harga: {
        big: 7700000,
        medium: 7700000,
      },
    },
  ],
  "Tegal, Pekalongan, Guci": [
    {
      durasi: "2 Hari",
      harga: {
        big: 8000000,
        medium: 8000000,
      },
    },
  ],
  Pangandaran: [
    {
      durasi: "2 Hari",
      harga: {
        big: 9500000,
        medium: 9500000,
      },
    },
    {
      durasi: "3 Hari",
      harga: {
        big: 10000000,
        medium: 10000000,
      },
    },
  ],
  "Purwokerto, Wonosobo, Dieng, Purbalingga, Metro Lampung": [
    {
      durasi: "3 Hari",
      harga: {
        big: 10500000,
        medium: 10500000,
      },
    },
    {
      durasi: "4 Hari",
      harga: {
        big: 12500000,
        medium: 12500000,
      },
    },
  ],
  "Yogyakarta, Palembang, Solo, Sragen": [
    {
      durasi: "3 Hari",
      harga: {
        big: 10800000,
        medium: 10800000,
      },
    },
    {
      durasi: "4 Hari",
      harga: {
        big: 14300000,
        medium: 14300000,
      },
    },
  ],
  "Ziarah Walisongo": [
    {
      durasi: "6 Hari",
      harga: {
        big: 21000000,
        medium: 21000000,
      },
    },
  ],
  "Jatim, Malang, Madura": [
    {
      durasi: "4 Hari",
      harga: {
        big: 16500000,
        medium: 16500000,
      },
    },
    {
      durasi: "5 Hari",
      harga: {
        big: 17800000,
        medium: 17800000,
      },
    },
  ],
  Bali: [
    {
      durasi: "8 Hari",
      harga: {
        big: 29000000,
        medium: 29000000,
      },
    },
  ],
  Lombok: [
    {
      durasi: "10 Hari",
      harga: {
        big: 36000000,
        medium: 36000000,
      },
    },
  ],
}

export const destinationLocations = [
  "Transfer In/Out Soekarno Hatta",
  "Kota Jakarta",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Karawaci",
  "Cikupa",
  "Karawang",
  "Bogor",
  "Taman Matahari",
  "Cimory",
  "Gadog",
  "Puncak",
  "Cisarua",
  "Cipanas",
  "Cibodas",
  "Lido",
  "Purwakarta",
  "Cikampek",
  "Bandung",
  "Lembang",
  "Sukabumi",
  "Cianjur",
  "Anyer",
  "Carita",
  "Subang",
  "Sumedang",
  "Pangalengan",
  "Kawah Putih",
  "Ciwidey",
  "Pel. Ratu",
  "TJ. Lesung",
  "Garut",
  "Kuningan",
  "Cirebon",
  "Majalengka",
  "Ziarah Banten",
  "Panjalu",
  "Pamijahan",
  "Haruman",
  "Tegal",
  "Pekalongan",
  "Guci",
  "Pangandaran",
  "Purwokerto",
  "Wonosobo",
  "Dieng",
  "Purbalingga",
  "Metro Lampung",
  "Yogyakarta",
  "Palembang",
  "Solo",
  "Sragen",
  "Ziarah Walisongo",
  "Jatim",
  "Malang",
  "Madura",
  "Bali",
  "Lombok",
]

// lokasi penjemputan
export const pickupLocations = [
  "Jakarta",
  "Depok",
  "Karawang",
  "Bekasi",
  "Cileungsi",
  "Tangerang Kota",
  "Tangerang Kabupaten",
  "Bogor",
  "Sentul",
]
