module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        golden: "#B8A273",
        blacken: "#313131",
        lighten: "#f4f3ef",
        yellowish: "#F5F3E6",
      },
    },
  },
};
