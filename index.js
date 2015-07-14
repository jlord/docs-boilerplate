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
  else getFiles('default')
}

function parseOptions (option) {
  console.log('parsing option')
  var docSet = config[option]
  // ask if should use default upon not finding
  if (!docSet) return console.log('Could not find', option, 'in config.json')
  // it could be an array with a dir and a file string!
  docSet.forEach(function (doc) {
    var filepath = path.join(__dirname, doc)
    fs.stat(filepath, function (err, stats) {
      if (stats.isFile()) writeDocs(doc)
      else if (stats.isDirectory()) {
        var array = []
        array.push(doc)
        writeDocs(array)
      }
    })
  })
  // may not be a dir, may just be one filel listed.
  // check each thing in array to see if directory or file
  // get option and match it to key in config
  // use that to get a directory of array of files
  // pass that onto writeDocs
}

// takes in a string for directory or array of strings for files
function getFiles (docs) {
  if (typeof docs === 'string') {
    glob(path.resolve(__dirname, docs) + '/**', function (err, files) {
      if (err) return console.log(err)
      writeDocs(files)
    })
  } else if (typeof docs === 'array') {
    console.log('array')
    // writeDocs(docs)
  }
}

function writeDocs (files) {
  files.forEach(function writeFile (file) {
    // how to tell it not to match directories?
    if (file.indexOf('.') < 0) return
    var contents = fs.readFileSync(file)
    var pathParts = file.split('/')
    var filename = pathParts[pathParts.length - 1]
    var outputPath = path.join(process.cwd(), filename)
    fs.writeFileSync(outputPath, contents.toString())
  })
}
