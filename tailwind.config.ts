import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00FFF0',
        secondary: '#FFD700',
        bg: '#0A0E14',
        card: '#141821',
        success: '#00FF88',
        danger: '#FF0055'
      },
      boxShadow: {
        glow: '0 0 24px rgba(0,255,240,0.4)'
      }
    }
  },
  plugins: []
}
export default config
