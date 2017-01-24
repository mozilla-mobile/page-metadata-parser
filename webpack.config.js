module.exports = {
    entry: ['./parser.js'],
    output: {
        path: './client',
        filename: 'page-metadata-parser.js',
        libraryTarget: 'var',
        library: 'metadataparser'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
              plugins: ['transform-es2015-constants', 'transform-runtime']
            },
            exclude: [
                /node_modules\/babel-/m,
                /node_modules\/core-js\//m,
                /node_modules\/regenerator-runtime\//m
            ]
        }]
    }
};

