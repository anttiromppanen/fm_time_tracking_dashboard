/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      fontSize: {
        userCardTitleSize: "18px",
      },
      colors: {
        userBlue: "hsl(246, 80%, 60%)",
        userWorkRed: "hsl(15, 100%, 70%)",
        userSoftBlue: "hsl(195, 74%, 62%)",
        userStudyRed: "hsl(348, 100%, 68%)",
        userExerciseGreen: "hsl(145, 58%, 55%)",
        userSocialViolet: "hsl(264, 64%, 52%)",
        userSelfCareOrange: "hsl(43, 84%, 65%)",
        userVeryDarkBlue: "hsl(226, 43%, 10%)",
        userDarkBlue: "hsl(235, 46%, 20%)",
        userDesaturatedBlue: "hsl(235, 45%, 61%)",
        userPaleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
