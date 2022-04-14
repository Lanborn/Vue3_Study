const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require("webpack-merge")
const commonConfig = require('./webpack.comm.config')


module.exports = merge(commonConfig ,{
    mode : "production",
    plugins : [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns : [
                {
                    from : "./public",
                    // to : "build", 有默认的读取   它会与path进行拼接
                    globOptions : {
                        ignore : [
                            "**/index.html"
                        ]
                    }
                },
            ]
        }),
    ]
})