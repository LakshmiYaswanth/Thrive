import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  //sets timeout for each test case
  timeout: 6000000,
  //global time for each test cases
  globalTimeout: 12000000,
  //number of retries if test case fails
  retries: 0,
  workers: 1,
  projects: [
    {
      name: "trive",
      use: {
        // Configure the browser to use.
        browserName: `chromium`,
        //Chrome Browser Config
        //channel: `chrome`,
        //Browser Mode
        headless: false,
        launchOptions: {
          slowMo: 0,
        },
        ignoreHTTPSErrors: true,
        //Browser height and width
        // viewport: { width: 1920, height: 1080 },
        //Enable File Downloads in Chrome
        acceptDownloads: true,
        //Artifacts
        screenshot: `on`,
        video: `on`,
        trace: `on`,
      },
    }
  ],
  testMatch: [
    //'tc001.test.ts',
    // 'search.test.ts',
    'api.test.ts'
  ],
  //Reporters
  reporter: [[`list`], ["dot"],
  ["json", { outputFile: "test-result.json" }], //  -> JSON
  ['html', {
    open: "never"
  }], [`experimental-allure-playwright`]],
  globalTeardown: './src/helper/globalsetup.ts'
  // grep: [new RegExp("@smoke"), new RegExp("@slow"), new RegExp("@fast"), new RegExp("@reg"), new RegExp('@sanity')],
};

export default config;
