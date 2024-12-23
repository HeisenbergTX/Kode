/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        input: "#F7F7F8",
      },
      colors: {
        color: "#97979B",
      },
      fontSize: {
        s: "13px",
        m: "15px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
