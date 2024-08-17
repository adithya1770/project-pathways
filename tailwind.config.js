/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
      '110': '27rem',
      '120': '30rem',
      '122': '31rem',
      '128': '32rem',
      '130': '34rem',
      '135': '38rem',
      '160': '40rem',
      '162': '42rem',
      '168': '44rem',
      '165': '43rem',
      '170': '45rem',
      '192': '48rem',
      '224': '56rem',
      '256': '64rem',
    },
    width: {
      '128': '32rem',
      '160': '40rem',
      '192': '48rem',
      '224': '56rem',
      '256': '64rem',
    },
    height: {
      '128': '32rem',
      '160': '40rem',
      '170': '45rem',
      '192': '48rem',
      '224': '56rem',
      '256': '64rem',
    },
    fontSize: {
      '10xl': '10rem',
      '11xl': '11rem',
      '12xl': '20rem',
      '15xl': '40rem',
      '20xl': '56rem',
      '22xl': '64rem',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
