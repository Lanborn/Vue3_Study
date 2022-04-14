const path = require('path')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, "./build"),
        filename : "bundle.js",
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
            // {
            //     test : /\.(jpe?g|png|gif|svg)$/,
            //     use : {
            //         loader : "url-loader",
            //         options : {
            //             // outputPath : "img",
            //             name : "img/[name]-[hash:6].[ext]",
            //             limit : 100 * 1024
            //         }
            //     }
            // },
            {
                test : /\.(jpe?g|png|gif|svg)$/,
                type : "asset",
                generator : {
                    filename : "img/[name]-[hash:6][ext]"
                },
                parser : {
                    dataUrlCondition : {
                        maxSize: 100 * 1024
                    }
                }
            },
            // {
            //     test : /\.(eot|ttf|woff2?)$/,
            //     use : {
            //         loader : "file-loader",
            //         options : {
            //             name : "font/[name]_[hash:6].[ext]"
            //         }
            //     }
            // }
            {
                test : /\.(eot|ttf|woff2?)$/,
                type : "asset/resource",
                generator : {
                    filename : "font/[name]_[hash:6][ext]"
                }
            }
        ]
    },
};