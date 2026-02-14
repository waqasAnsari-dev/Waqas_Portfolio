module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
          },
          animation: {
              fadeIn: "fadeIn 0.3s ease-out",
              scaleIn: "scaleIn 0.3s ease-out",
          },
          keyframes: {
              fadeIn: {
                  "0%": { opacity: 0 },
                  "100%": { opacity: 1 },
              },
              scaleIn: {
                  "0%": { opacity: 0, transform: "scale(0.8)" },
                  "100%": { opacity: 1, transform: "scale(1)" },
              },
          },
    },
  },
  plugins: [],
};