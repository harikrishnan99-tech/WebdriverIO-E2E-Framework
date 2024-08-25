import { config } from "../wdio.config"

module.exports = {
          specs: [
              '../test/api/GoogleMapsAPI/specs/maps.spec.js'
          ],
          services: [],
          capabilities: [{
              browserName: 'chrome',
          }],
      };