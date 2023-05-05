module.exports = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: [require.resolve("./src/styles/globals.css")],
      },
    ],
  ],
};
