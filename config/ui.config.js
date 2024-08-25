module.exports = {
          specs: [
              './test/ui/**/*.spec.js'
          ],
          services: ['chromedriver'],
          capabilities: [{
              maxInstances: 5,
              browserName: 'chrome',
              acceptInsecureCerts: true
          }]
      };