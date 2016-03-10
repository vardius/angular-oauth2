var loaders = require("./loaders");
var webpack = require('webpack');

module.exports = {
    entry: './tests/app.js',
    output: {
        filename: 'angular-oauth2.js',
        path: 'tmp'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    externals: {
        'angular': 'angular',
        'query-string': 'query-string'
    },
    devtool: "source-map-inline",
    module: {
        loaders: loaders,
        postLoaders: [
            {
                test: /^((?!\.spec\.ts).)*.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'istanbul-instrumenter'
            }
        ]
    }
};

