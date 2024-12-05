/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3399FF',
        secondry: '#9FFF24',
        body: '#ffffff',
        container: '#f5faff',
        text: '	#001a33'
      },
    },
  },
  plugins: [],
}

