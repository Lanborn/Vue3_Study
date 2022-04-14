const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin }  = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
    mode : "development",
    devtool: "source-map", // 定位错误代码
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, "./build"),
        filename : "js/bundle.js",
        // assetModuleFilename: "img/[name]_[hash:6][ext]"
    },
    module : {
        rules : [
            //css规则 
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                // 打包less文件的加载器顺序
                test : /\.less$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test : /\.(jpe?g|png|gif|svg)$/,
                type : "asset",
                generator : {
                    filename : "img/[name]-[hash:6][ext]"
                },
                parser : {
                    dataUrlCondition : {
                        maxSize: 10 * 1024
                    }
                }
            },

            {
                test : /\.(eot|ttf|woff2?)$/,
                type : "asset/resource",
                generator : {
                    filename : "font/[name]_[hash:6][ext]"
                }
            },
            {
                test : /\.js$/,
                loader : "babel-loader"
            },
            {
                test : /\.vue$/,
                loader : "vue-loader"
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 传入的是options对象
            template : "./public/index.html",
            title : "你好"
        }),
        new DefinePlugin({
            BASE_URL : "'./'",
            __VUE_OPTIONS__API : true, // 对vue2做适配的
            __VUE_PROD_DEVTOOLS : false // 开发阶段的调试工具
        }),
        new CopyWebpackPlugin({
            patterns : [
                {
                    from : "public",
                    // to : "build", 有默认的读取   它会与path进行拼接
                    to : "./",
                    globOptions : {
                        ignore : [
                            "**/index.html"
                        ]
                    }
                },
            ]
        }),
        new VueLoaderPlugin()
    ]
};