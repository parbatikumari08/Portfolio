export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Microsoft accent colors
        msBlue: "#2563eb",
        msRed: "#dc2626",
        msYellow: "#facc15",
        msGreen: "#16a34a",

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
