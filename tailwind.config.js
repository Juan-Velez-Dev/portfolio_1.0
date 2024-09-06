const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "web-100": "#262729",
        "gray-100": "#45474B",
        "white-100": "#F5F7F8",
        "yellow-100": "#F4CE14",
      },
    },
    screens: {
      sm: "360px",
      md: "640",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  plugins: [flowbite.plugin()],
};
