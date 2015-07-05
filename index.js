var fs = require('fs')
// var glob = require('glob')

var config = require('./config.json')

// takes in object of options from arguments passed in
// docsBoilerplate([docSet] [, alternate config])
// docSet, Array; config, String
// probably need custom output too, maybe set in config
// maybe pass in as option
module.exports = function docsBoilerplate(option, customConfig) {
  if (customConfig) config = require(customConfig)
  if (option) parseOptions(option)
  else writeDocs('default')
}

function parseOptions (option) {
  var docSet = config[option]
  if (!docSet) return console.log('Could not find', option, 'in config.json')
  if (docSet.length === 1) {
	  // it is a directory, glob all the files and write each one
  } else if (docSet.legnth >= 1) {
  	// it is an array of files, write each one
  }
  // get option and match it to key in config
  // use that to get a directory of array of files
  // pass that onto writeDocs
}

function writeDocs (path) {
  // path may be string for directory or array for files
}
