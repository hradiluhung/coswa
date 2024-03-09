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
    name: "Big Bus 002 Al Qowiyyu",
    imageFolder: "/images/armadas/Al Qowiyyu",
    type: "JetBus 1 Single Glass Morodadi",
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
  {
    id: 7,
    name: "Medium Bus 006 Al Mughni",
    imageFolder: "/images/armadas/Al Mughni",
    type: "JetBus 3 Medium Bus",
    capacity: "33-29",
    price: "Rp 1.500.000",
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
        medium: 1300000,
      },
    },
  ],
  "Dalam Kota Jakarta, Bekasi": [
    {
      durasi: "1 Hari",
      harga: {
        big: 2200000,
        medium: 1500000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 4000000,
        medium: 2800000,
      },
    },
  ],
  "Tangerang, Depok, Karawaci, Cikupa, Karawang, Bogor": [
    {
      durasi: "1 Hari",
      harga: {
        big: 2700000,
        medium: 1800000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 5000000,
        medium: 3000000,
      },
    },
  ],
  "Taman Matahari, Cimory, Gadog, Puncak, Cisarua": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3000000,
        medium: 2250000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 5800000,
        medium: 3250000,
      },
    },
  ],
  "Cipanas, Cibodas, Lido, Purwakarta, Cikampek": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3200000,
        medium: 2400000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6000000,
        medium: 3400000,
      },
    },
  ],
  "Bandung, Lembang, Sukabumi, Cianjur, Anyer, Carita, Subang": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3600000,
        medium: 2400000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6500000,
        medium: 4200000,
      },
    },
  ],
  "Sumedang, Pangalengan, Kawah Putih, Ciwidey, Pel. Ratu, TJ. Lesung": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3900000,
        medium: 2800000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6900000,
        medium: 4800000,
      },
    },
  ],
  "Garut, Kuningan, Cirebon, Majalengka": [
    {
      durasi: "1 Hari",
      harga: {
        big: 4300000,
        medium: 3200000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 7000000,
        medium: 5200000,
      },
    },
  ],
  "Ziarah Banten": [
    {
      durasi: "1 Hari",
      harga: {
        big: 3800000,
        medium: 2800000,
      },
    },
    {
      durasi: "2 Hari",
      harga: {
        big: 6800000,
        medium: 4800000,
      },
    },
  ],
  "Cirebon, Panjalu, Pamijahan": [
    {
      durasi: "2 Hari",
      harga: {
        big: 7500000,
        medium: 5500000,
      },
    },
  ],
  "Panjalu, Pamijahan, Haruman": [
    {
      durasi: "2 Hari",
      harga: {
        big: 7700000,
        medium: 5700000,
      },
    },
  ],
  "Tegal, Pekalongan, Guci": [
    {
      durasi: "2 Hari",
      harga: {
        big: 8000000,
        medium: 5700000,
      },
    },
  ],
  Pangandaran: [
    {
      durasi: "2 Hari",
      harga: {
        big: 9500000,
        medium: 6000000,
      },
    },
    {
      durasi: "3 Hari",
      harga: {
        big: 10000000,
        medium: 6500000,
      },
    },
  ],
  "Purwokerto, Wonosobo, Dieng, Purbalingga, Metro Lampung": [
    {
      durasi: "3 Hari",
      harga: {
        big: 10500000,
        medium: 7500000,
      },
    },
    {
      durasi: "4 Hari",
      harga: {
        big: 12500000,
        medium: 9000000,
      },
    },
  ],
  "Yogyakarta, Palembang, Solo, Sragen": [
    {
      durasi: "3 Hari",
      harga: {
        big: 10800000,
        medium: 7500000,
      },
    },
    {
      durasi: "4 Hari",
      harga: {
        big: 14300000,
        medium: 9500000,
      },
    },
  ],
  "Ziarah Walisongo": [
    {
      durasi: "6 Hari",
      harga: {
        big: 21000000,
        medium: 15000000,
      },
    },
  ],
  "Jatim, Malang, Madura": [
    {
      durasi: "4 Hari",
      harga: {
        big: 16500000,
        medium: 10000000,
      },
    },
    {
      durasi: "5 Hari",
      harga: {
        big: 17800000,
        medium: 12000000,
      },
    },
  ],
  Bali: [
    {
      durasi: "8 Hari",
      harga: {
        big: 29000000,
        medium: 18500000,
      },
    },
  ],
  Lombok: [
    {
      durasi: "10 Hari",
      harga: {
        big: 36000000,
        medium: 23000000,
      },
    },
  ],
}
