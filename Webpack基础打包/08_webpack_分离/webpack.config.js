const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin }  = require('webpack')
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
    target : "web",
    mode : "development",
    devtool: "source-map", // 定位错误代码
    // watch : true,
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, "./build"),
        filename : "js/bundle.js",
        // assetModuleFilename: "img/[name]_[hash:6][ext]"
    },
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
    resolve : {
        // modules : ["node_modules"],  // 模块的默认加载文件夹
        extensions: [".js",".json",".mjs",".vue",".ts",".jsx"], // 默认值有.js、.jsoN 、.mjs
        alias : {
            "@" : path.resolve(__dirname, "./src"),
            "js" : path.resolve(__dirname, "./src/js")
        }

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

        new VueLoaderPlugin()
    ]
};