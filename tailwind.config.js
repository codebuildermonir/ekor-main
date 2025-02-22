/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
       "footer-texture": "url('./public/imgaes/pozadí 1.png')",
       "g2": "url('../../public/image/asset 33.png')",
      },
      fontFamily: {
       "barlow": ["Barlow", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        "green-800": "#1D7460",
        "green-600": "#22826C",
        "green-200": "#519888",
        "green-100": "#E8FAF6",
        "orange": "#F16520",
        "orange-100": "#FEEFE8",
        "black": "#2A3741",
        "white": "#FFFFFF",
        "grey-200": "#F4F5F6",
        "grey-400": "#ECECEC",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
