exports.config = {
  // ====================
  // Appium Configuration
  // ====================
  services: [
    [
      "appium",
      {
        command: "appium",
      },
    ],
  ],
  port: 4723,
  // ====================
  // Test Configurations
  // ====================
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    "spec",
  ],
  specs: [
    ["./test/specs/Testcase*.spec.js"]
],
  
// suites: {
//   end2end: ["./test/specs/Testcase*.js"]
// },
  capabilities: [
    {
      "appium:deviceName": "emulator-5554",
      platformName: "android",
      "appium:appPackage": "com.mstqa",
      "appium:appActivity": "com.mstqa.MainActivity"
    },
  ],
  // ====================
  // Framework Configuration
  // ====================
  framework: "mocha",
  mochaOpts: {
    timeout: 60000,
  },
  waitforTimeout: 5000,
};
