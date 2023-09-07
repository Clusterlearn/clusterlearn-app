/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      times: ["Times New Roman"],
      ver: ["Verdana"],
      int: ["inter"],
    },

    extend: {
      screens: {
        sm: "100px", 
        md: "500px",
        // lg: "976px",820
        // xl: "1440px", 976
      },

      // container: {
      //   sm: "300px",
      //   md: "500px",
      //   lg: "600px",
      // },
      colors: {
        logo: {
          left: "#0F172A",
          right: "#E76F51",
        },
        darkblue: "#0F172A",
        "custom-color": "rgba(15, 23, 42, 0.7)",
        "testimonial-color-bg-1": "rgba(231, 111, 81, 0.08)",
        "testimonial-color-bg-2": "rgba(42, 157, 143, 0.08)",
        borderEmail: "rgba(255, 255, 255, 0.70)",
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
