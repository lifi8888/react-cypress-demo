import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'test-report',
    overwrite: true,
    html: true,
    json: false,
    reportFilename: '[name]-report',
    charts: true,
    reportPageTitle: 'E2E Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
});
