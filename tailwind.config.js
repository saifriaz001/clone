/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazonCLone:{
          background:"#EAEDED",
          light_blue:"#233F3A",
          yellow:"#FEBD69",
          DEFAULT:"#131921",

        }
      }
    },
  },
  plugins: [],
}

