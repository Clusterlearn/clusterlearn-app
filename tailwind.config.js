/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      times: ["Times New Roman"],
      ver: ["Verdana"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        logo: {
          left: "#0F172A",
          right: "#E76F51",
        },
        darkblue: "#0F172A",
      },
      // fontSize: {
      //   sm: "0.8rem",
      //   base: "1rem",
      //   xl: "1.25rem",
      //   "2xl": "1.563rem",
      //   "3xl": "1.953rem",
      //   "4xl": "2.441rem",
      //   "5xl": "3.052rem",
      // },
      // spacing: {
      //   1: "8px",
      //   2: "12px",
      //   3: "16px",
      //   4: "24px",
      //   5: "32px",
      //   6: "48px",
      // },
    },
  },
  plugins: [],
};
