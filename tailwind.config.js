export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        teranga: {
          green: '#0B6E4F',
          'green-deep': '#064635',
          yellow: '#FFC72C',
          lime: '#7CB518',
          ink: '#0A0F0D',
          coal: '#111917',
          sand: '#F4F1E9',
          cream: '#FBFAF5',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'grain-shift': {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%,2%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
}
