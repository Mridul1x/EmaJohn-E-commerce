/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e585df",

          secondary: "#76e266",

          accent: "#8155cc",

          neutral: "#272F34",

          "base-100": "#FFFFFF",

          info: "#29AEDB",

          success: "#1C9770",

          warning: "#ECB427",

          error: "#E34577",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
