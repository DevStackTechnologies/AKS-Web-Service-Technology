/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aks: {
          primary: "#0052FF",
          secondary: "#0070FF",
          cyan: "#00C2FF",
          accent: "#38BDF8",
          navy: "#0A0F1D",
          dark: "#1E293B",
          steel: "#64748B",
          silver: "#CBD5E1",
          light: "#F8FAFC",
          bgLight: "#F1F5F9",
          white: "#FFFFFF",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 82, 255, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(0, 194, 255, 0.22)',
        'premium': '0 20px 50px rgba(10, 15, 29, 0.12)',
        'glow': '0 0 25px rgba(0, 112, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-logo-primary': 'linear-gradient(135deg, #0052FF 0%, #0070FF 50%, #00C2FF 100%)',
        'gradient-logo-accent': 'linear-gradient(135deg, #0070FF 0%, #38BDF8 100%)',
        'gradient-logo-dark': 'linear-gradient(135deg, #0A0F1D 0%, #002999 50%, #0052FF 100%)',
        'gradient-logo-silver': 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #CBD5E1 100%)',
        'gradient-hero': 'radial-gradient(circle at 60% 20%, rgba(0, 194, 255, 0.25) 0%, rgba(0, 41, 153, 0.95) 50%, rgba(10, 15, 29, 1) 100%)',
      },
      borderRadius: {
        'card': '20px',
      }
    },
  },
  plugins: [],
}
