export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Microsoft accent colors
         msBlue: '#00A4EF',
        msRed: '#F25022',
        msGreen: '#7FBA00',
        msYellow: '#FFB900',

        // Neutral system
        pageLight: "#f3f6fb",
        pageDark: "#0f172a",
        cardLight: "#ffffff",
        cardDark: "#020617",
        textMutedLight: "#475569",
        textMutedDark: "#94a3b8",
      },
    },
  },
  plugins: [],
}
