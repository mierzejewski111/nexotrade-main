/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fb",
        surface: "#f8f9fb",
        "surface-container-low": "#f3f4f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e7e8ea",
        "surface-container-highest": "#e1e2e4",
        "surface-variant": "#e1e2e4",
        "on-surface": "#191c1e",
        "on-surface-variant": "#434654",
        primary: "#003d9b",
        "primary-container": "#0052cc",
        "primary-fixed": "#dae2ff",
        tertiary: "#004b59",
        "on-secondary-fixed-variant": "#34476a",
        "outline-variant": "#c3c6d6",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
