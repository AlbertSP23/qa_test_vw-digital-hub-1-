const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    env: {
      API_URL: process.env.CYPRESS_API_URL || "http://localhost:3004",
      // TODO: adjust routes
    },
    viewportWidth: 1366,
    viewportHeight: 850,
    defaultCommandTimeout: 8000,
    retries: { runMode: 1, openMode: 0 }
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    charts: true,
    reportPageTitle: "VW QA E2E",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  video: false,
  screenshotsFolder: "cypress/reports/screenshots"
  // TODO: Export Cucumber JSON for Xray:
});
