const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const Package = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port:8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp' : './src/bootstrap'
            },
            shared: Package.dependencies
            //Para crear una variable global
            
        }),
    ]
}

module.exports = merge(commonConfig,devConfig)