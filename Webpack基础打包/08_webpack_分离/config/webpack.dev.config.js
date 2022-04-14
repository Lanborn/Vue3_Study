const { merge } = require("webpack-merge")
const commonConfig = require('./webpack.comm.config')

module.exports = merge(commonConfig ,{
    mode : "development",
    devtool : "source-map",
    devServer : {
        // contentBase : "./public",
        hot : true,
        // host : "0,0,0,0",
        port : 8080,
        open : true,
        // compress : true  本机测试的时候不开启
        proxy : {
            "/api" : {
                target : "http://localhost:8888",
                pathRewrite : {
                    "^/api" : ""
                }
            }
        }
    },
}) 