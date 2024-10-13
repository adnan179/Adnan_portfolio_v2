/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        Montserrat: ["Montserrat", "inter"],
        MajorMonoDisplay: ["Major Mono Display", "Montserrat"],
        QwitcherGrypen: ["Qwitcher Grypen, Major Mono Display"],
      },
    },
  },
  plugins: [],
};
