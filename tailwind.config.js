/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  responsive: "desktop-first", // default: 'mobile-first'
  theme: {
    extend: {},
    screens: {
      mobile: "479px",
      // => @media (max-width: 479px) { ... }

      tablet: "767px",
      // => @media (max-width: 767px) { ... }

      desktop: "1280px",
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
