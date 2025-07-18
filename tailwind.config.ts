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
            'iphone-x': '375px',        // iPhone SE, iPhone 6/7/8, iPhone X
            'iphone-12-14': '390px',     // iPhone 12/13/14
            'iphone-pro': '393px',     // iPhone 14 Pro
            'iphone-promax': '430px',  // iPhone 14 Pro Max / 15 Pro Max
            sm: '640px',       // Mobile
            md: '768px',       // Tablet
            lg: '1024px',      // Small laptops
            xl: '1280px',      // Medium laptops / 13" MacBook Air
            '2xl': '1440px',   // 15.4" laptops (Full HD, non-Retina) / 15" MacBook Air (Retina)
            'mac14': '1512px', // 14" MacBook Pro (Retina)
            'mac16': '1728px', // 16" MacBook Pro (Retina)
            '4xl': '1920px',   // Full HD desktop monitors
            '5xl': '2560px',   // 2K / Retina displays
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