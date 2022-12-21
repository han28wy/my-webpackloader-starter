const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    module:{
        rules:[
            {
                test: '/\.js$/',
                use:[
                    {
                        loader: 'foreachLoader'
                    },
                    {
                        loader: 'splitLoader',
                        options:{
                            name: 'xx'
                        }
                    }
                ]

            }
        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name],js'

    }
}