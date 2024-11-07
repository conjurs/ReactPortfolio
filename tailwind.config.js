module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0F0118',      // Dark purple-black
        secondary: '#6D28D9',    // Vibrant purple
        accent: '#A855F7',       // Lighter purple
        surface: '#1A0B2E',      // Slightly lighter purple-black
        text: '#F3F4F6',         // White text
        textDark: '#9CA3AF',     // Muted text
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}
