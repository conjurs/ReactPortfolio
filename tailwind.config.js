module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          black: '#000000',
          green: '#8B5CF6',
          darkGreen: '#7C3AED',
          gray: '#1a1a1a',
          lightGray: '#333333',
          white: '#ffffff',
        },
      },
      fontFamily: {
        'dos': ['VT323', 'monospace'],
        'vt323': ['VT323', 'monospace'],
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 3s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
