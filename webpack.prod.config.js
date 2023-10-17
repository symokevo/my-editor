const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
    ...baseConfig,
    output: {
        path: path.join(process.cwd(), 'dist', 'my-editor'),
        filename: 'main.js'
    }
};