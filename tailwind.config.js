/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--brown-100)",
        primary_9: "var(--brown-90)",
        primary_8: "var(--brown-80)",
        primary_7: "var(--brown-70)",
        primary_6: "var(--brown-60)",
        primary_5: "var(--brown-50)",
        primary_4: "var(--brown-40)",
        primary_3: "var(--brown-30)",
        primary_2: "var(--brown-20)",
        primary_1: "var(--brown-10)",
        color_1: "var(--color-1)",
        color_2: "var(--color-2)",
        color_3: "var(--color-3)",
        color_4: "var(--color-4)",
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right": "slideRight 2s ease-in-out forwards",
        "scale-3d": "scale3D 1.8s ease-in-out forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scale3D: {
          "0%": { transform: "scale(1) rotateX(0deg)" },
          "100%": { transform: "scale(1.8) rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
