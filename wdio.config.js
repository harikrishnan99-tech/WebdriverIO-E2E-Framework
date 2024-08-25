const apiConfig = require('./config/api.config');
const uiConfig = require('./config/ui.config');

const baseConfig = {
    runner: 'local',
    specs: [
        './test/**/*.spec.js'
    ],
    exclude: [],
    capabilities: [{
          browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
    }],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};

const config = process.env.TEST_TYPE === 'ui' ? { ...baseConfig, ...uiConfig } : { ...baseConfig, ...apiConfig };

exports.config = config;