import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  prefix: '',
  theme: {
    container: {
        center: true,
        padding: '1rem',
        
        screens: {
          '2xl': '1140px',
          '3xl': '1512px',
          '4xl': '1920px'
        }
    },
    extend: {
        colors: {
          primary: '#FF6363',
          secondary: {
            100: '#E2E2D5',
            200: '#888883',
          },
        },
      }
  },
  plugins: [],
}

export default config