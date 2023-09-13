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
    },
  },
  plugins: [],
};
