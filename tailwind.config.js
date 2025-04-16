/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // Example blue color
        secondary: '#10b981',  // Example emerald color
        accent: '#f59e0b',     // Example amber color
      },
    },
  },
  plugins: [],
}