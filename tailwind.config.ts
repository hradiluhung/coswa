import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient": "linear-gradient(0deg, #0A0F34 0%, #181E4B 100%)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetriary: "var(--tetriary)",
        quaternary: "var(--quaternary)",
        quinary: "var(--quinary)",
      },
      fontFamily: {
        title: ["var(--font-clashDisplay)"],
        body: ["var(--font-satoshi)"],
      },
      boxShadowColor: {
        secondary: "rgba(var(--secondary-rgb), var(--tw-bg-opacity))",
        tetriary: "rgba(var(--tetriary-rgb), var(--tw-bg-opacity))",
      },
      textColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetriary: "var(--tetriary)",
        quaternary: "var(--quaternary)",
        quinary: "var(--quinary)",
      },
      boxShadow: {
        myShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      borderColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetriary: "var(--tetriary)",
        quaternary: "var(--quaternary)",
        quinary: "var(--quinary)",
      },
      height: {
        500: "500px",
      },
    },
  },
  plugins: [],
}
export default config
