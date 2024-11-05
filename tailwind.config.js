/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#FF0000',
        bgPrimary: '#9538E2',
      }
    },
  },
  plugins: [daisyui,],
}

