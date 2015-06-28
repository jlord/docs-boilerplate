var fs = require('fs')
var config = require('./config.json')

// takes in object of options from arguments passed in
module.exports = function docsBoilerplate(options) {
  if (options) parseOptions(options)
  else writeDocs('default')
}

function parseOptions (options) {
  // get option and match it to key in config
  // use that to get a directory of array of files
  // pass that onto writeDocs
}

function writeDocs (path) {
  // path may be string for directory or array for files
}
