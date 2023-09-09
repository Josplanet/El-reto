/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C2FF5F",
        },
        surface: {
          DEFAULT: "#222831",
        },
        on: {
          primary: {
            DEFAULT: "#222831",
          },
          surface: {
            DEFAULT: "#eeeeee",
          },
        },
      },
    },
  },
  plugins: [],
};
