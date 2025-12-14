/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0000FF', // Blue
        'secondary': '#FFFFFF', // White
        'steel-blue': {
          '50': '#f2f7fd',
          '100': '#e4edfa',
          '300': '#8cbded',
          '500': '#2c83d6',
          '600': '#1a62af',
          '800': '#164376',
          '900': '#183a62',
          '950': '#102441',
        },
      },
    },
  },
  plugins: [],
}
