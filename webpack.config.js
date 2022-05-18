const path = require('path')
module.exports = {
    mode: 'none',
    watch: true,
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    }
}