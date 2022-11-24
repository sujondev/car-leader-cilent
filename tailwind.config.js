/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        carLeaderTheme: {
          primary: "#dd3d53",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#ffffff"
        }
      }
    ]
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
