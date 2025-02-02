/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f6f6f7",
        bp: "#222222",
        gray5: "#c7c7c7",
        gray8: "#909090",
        gray9: "#e9e9e9",
        avail: "#4FD64C",
        surface2: "#0A0A0A",
        blk: "#212121",
        color: "#fff",
      },
      fontWeight: {
        thin: 100,
      },
      cursor: {
        custom: 'url("/rocket.png"), auto',
        discord: 'url("/Cursors/dicord.png"), auto',
        gta5: 'url("/Cursors/gta5.png"), auto',
        ts: 'url("/Cursors/TS.png"), auto',
        outlook: 'url("/Cursors/outlook.png"), auto',
        meeting: 'url("/Cursors/meeting.png"), auto',
        Twitter: 'url("/Cursors/twitter.png"), auto',
        resume: 'url("/Cursors/resume.png"), auto',
        github: 'url("/Cursors/github.png"), auto',
        linkedin: 'url("/Cursors/linkedin.png"), auto',
        github: 'url("/Cursors/github.png"), auto',
        robot: 'url("/Cursors/robot.gif"), auto',

      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
