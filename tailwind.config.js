module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",],

    darkMode: "class",
    theme: {
        extend: {

            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },

            animation: {
                fadeIn: "fadeIn 0.3s ease-out",
                scaleIn: "scaleIn 0.3s ease-out",
                gradientX: "gradientX 5s ease infinite",
                spinSlow: "spin 6s linear infinite",
                blob: "blob 8s infinite",
                float: "float 6s ease-in-out infinite",

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

                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },

                gradientX: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },

        },
    },
    plugins: [],
};
