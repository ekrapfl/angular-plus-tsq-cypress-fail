import { defineConfig } from "cypress";
import * as path from "path";

export default defineConfig({
  viewportHeight: 600,
  viewportWidth: 375,
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
      webpackConfig: {
        devServer: {
          static: {
            // Serve images with absolute paths under /assets
            directory: path.join(__dirname, "src/assets"),
            publicPath: "/assets/",
          },
        },
      },
    },
    specPattern: "**/*.cy.ts",
  },
});
