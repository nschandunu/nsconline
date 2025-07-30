import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  prefix: '',
  theme: {
    container: {
        center: true,
        padding: '4rem',

        // padding: {
        //   DEFAULT: '1rem',
        //   mac14: '2rem',
        //   '2xl': '4rem',
        // },
        
        screens: {
            sm: '640px',       // Mobile
            md: '768px',       // Tablet
            md2: '868px',       // Tablet #2
            md3: '970px',       // Tablet #3
            lg: '1024px',      // Small laptops
            xl: '1280px',      // Medium laptops / 13" MacBook Air
            'mac14': '1512px', // 14" MacBook Pro (Retina)
            '2xl': '1536px',   // 15.4" laptops (Full HD, non-Retina)
          }

          // screens: {
          //   'iphone-x': '375px',        // iPhone SE, iPhone 6/7/8, iPhone X
          //   'iphone-12-14': '390px',     // iPhone 12/13/14
          //   'iphone-pro': '393px',     // iPhone 14 Pro
          //   'iphone-promax': '430px',  // iPhone 14 Pro Max / 15 Pro Max
          //   sm: '640px',       // Mobile
          //   md: '768px',       // Tablet
          //   lg: '1024px',      // Small laptops
          //   xl: '1280px',      // Medium laptops / 13" MacBook Air
          //   '2xl': '1440px',   // 15.4" laptops (Full HD, non-Retina) / 15" MacBook Air (Retina)
          //   'mac14': '1512px', // 14" MacBook Pro (Retina)
          //   'mac16': '1728px', // 16" MacBook Pro (Retina)
          //   '4xl': '1920px',   // Full HD desktop monitors
          //   '5xl': '2560px',   // 2K / Retina displays
          // }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],     // used globally
        alt: ['"Comic Neue"', 'cursive'],
      },
        colors: {
          primary: '#FF6363',
          secondary: {
            100: '#E2E2D5',
            200: '#888883',
          },
        },
        maxWidth: {
          '8xl': '96rem', // 1536px
        },
        animation: {
          'intro-gradient': 'intro-gradient 12s ease infinite',
        },
        keyframes: {
          'intro-gradient': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
      }
  },
  plugins: [],
}

export default config