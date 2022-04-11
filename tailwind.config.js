module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans - serif'],
        'roboto': ['Roboto', 'sans - serif']
      },
      colors: {
        "merida-green": "#90C300",
        "background-color": "#f9f9f9",
        "text-color": "#232323"
      }
    }
  },
  plugins: []
};
