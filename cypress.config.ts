import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 600,
  viewportWidth: 375,
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
