/*! adapterjs - v0.11.0 - 2015-07-21 */

var sharedConfig = require(['base/browser.Chrome.conf.js'], function() {

module.exports = function(config) {

  sharedConfig(config);

  config.files.push('../unit/MediaStreamError.spec.js');

  // generate random port
  config.port = 5005;

  config.xmlReporter = {
	   outputFile: '../results/Chrome/MediaStreamError.spec.js.xml'
  };
};

});