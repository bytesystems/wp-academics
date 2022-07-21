const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')
let config = defaults.__get__('config')

config.optimization.splitChunks = {
    cacheGroups: {
        default: false
    }
}

config.optimization.runtimeChunk = false

config.output.filename = 'static/js/academics.js'
config.plugins[5].options.filename = 'static/css/academics.css'