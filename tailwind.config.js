module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        golden: "#B8A273",
        "dark-golden": "#A5977D",
        blacken: "#313131",
        lighten: "#f4f3ef",
        yellowish: "#F5F3E6",
      },
      maxWidth: {
        maxscr: "calc(1200px + 19.6vw)",
      },
      height: {
        hero: "calc(100vh - 3rem)",
      },
    },
  },
};
