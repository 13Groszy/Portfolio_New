const path = require('path')
module.exports = {
    mode: 'none',
    watch: true,
    entry:  ['./main.js', './projects.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    }
}