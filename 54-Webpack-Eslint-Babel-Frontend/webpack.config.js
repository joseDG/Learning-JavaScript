const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public.js'),
        filename: 'bundle.js'
    },
    //el modo en que lo voy a usar. 
    mode: 'development',
    //agregar un servidor con webpack
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        publicPath: "/public/js/",
        watchContentBase: true 
    },
    //agregar plugins como es babel para traspilar el codigo
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    fix: true 
                }
            }
        ]
    }
}