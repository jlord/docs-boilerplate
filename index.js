var fs = require('fs')
var glob = require('glob')
var path = require('path')

var config = require('./config.json')
var customConfig

// takes in object of options from arguments passed in
// docsBoilerplate([docSet] [, alternate config])
// docSet, Array; config, String
// probably need custom output too, maybe set in config
// maybe pass in as option«»
module.exports = function docsBoilerplate (option, customConfig) {
  console.log('hello', option, customConfig)
  if (customConfig) customConfig = require(customConfig)
  if (option) parseOptions(option)
  else writeDocs('default')
}

function parseOptions (option) {
  console.log('parsing option')
  var docSet = config[option]
  // ask if should use default upon not finding
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

function writeDocs (docs) {
  console.log("docs", docs)
  if (typeof docs === 'string') {
    // console.log(path.resolve(__dirname, docs))
    glob(path.resolve(__dirname, docs) + '/**', function (err, files) {
      if (err) return console.log(err)
      // console.log('files', files)
      files.forEach(function writeFile (file) {
        if (err) return console.log(err)
        // how to tell it not to match directories?
        if (file.indexOf('.') < 0) return
        var contents = fs.readFileSync(file)
        var pathParts = file.split('/')
        var filename = pathParts[pathParts.length - 1]
        var outputPath = path.join(process.cwd(), filename)
        var contents = fs.readFileSync(file)
        fs.writeFileSync(outputPath, contents.toString())
      })
    })
  }

  // path may be string for directory or array for files
}
