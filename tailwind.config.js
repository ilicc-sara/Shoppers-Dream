/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  responsive: "desktop-first", // default: 'mobile-first'
  theme: {
    extend: {},
    screens: {
      mobile: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      tablet: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      desktop: { min: "768px" },
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
