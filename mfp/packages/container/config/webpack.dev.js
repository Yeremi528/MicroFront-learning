const {merge} = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const Package = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port:8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            //No es necesario solo convencion
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                
            },
            shared: Package.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig,devConfig)