// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui"

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     daisyui,
//   ],
//   daisyui:{
//     themes: ["forest"],
//   }
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Use require instead of import
  ],
  daisyui: {
    themes: ["coffee"], // Ensure these match exactly
  },
}