/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'avocado_dark': "url(/src/images/avocado_dark.jpg)",
        'vegs_on_white':"url(/src/images/vegs_on_white.jpg)",
        'green_vegs':"url(/src/images/green_vegs.jpg)",
        'oranges_in_green_dark': "url(/src/images/oranges_in_green_dark.jpg)",
        'tomato':"url(/src/images/tomato.jpg)",
        'mountains':"url(/src/images/gray_mountains.jpg)",
        'white_1':"url(/src/images/white.jpg)",
        "white_2":"url(/src/images/white-potrait.jpg)"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}

