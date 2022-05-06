module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#996dff",
          500: "#8257e5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
