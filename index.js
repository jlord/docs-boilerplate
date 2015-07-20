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
  if (!docSet) return console.log('Could not find', option, 'in config.json')
  docSet.forEach(function (doc) {
    if (fileOrDir) writeDocs(doc)
    else getFiles(doc)
  })
}

function isFile (filepath, cb) {
  fs.stat(filepath, function (err, stats) {
    if (err) return cb(err)
    if (stats.isFile()) {
      cb(null, true)
    }
    else if (stats.isDirectory()) {
      cb(null, false)
    }
  })
}

function getFiles (dir) {
  glob(path.resolve(__dirname, dir) + '/**', function (err, files) {
    if (err) return console.log(err)
    files.forEach(function (file) {
      if (file.indexOf('.') < 0) return
      isFile(file, function (err, status) {
        if (err) return console.log(err)
        if (status) return writeDocs(file)
        else return getFiles(file)
      })
    })
  })
}

function writeDocs (file) {
  console.log("write docs")
  var contents = fs.readFileSync(file)
  var pathParts = file.split('/')
  var filename = pathParts[pathParts.length - 1]
  var outputPath = path.join(process.cwd(), filename)
  fs.writeFileSync(outputPath, contents.toString())
}
