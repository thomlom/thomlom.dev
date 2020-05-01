module.exports = {
  purge: ["./src/**/*.js"],
  variants: {
    margin: ["first", "responsive"],
  },
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
}
