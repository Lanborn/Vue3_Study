const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, "./build"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            //css规则 
            {
                test : /\.css$/, // 正则表达式
                // 1. loader的写法(语法糖)
                // loader : "css-loader",

                // 2. 完整的写法
                use : [
                    // 执行顺序从后到前，应该先执行css-loader读取到css文件，然后再继续style的执行。
                    // {loader : "css-loader"}
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //     loader : "postcss-loader",
                    //     options : {
                    //         postcssOptions : {
                    //             plugins : [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     },
                    // }
                ]
            },
            {
                test : /\.less$/,
                // /\.less$/后面加i就会忽略大小写
                use : [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // {
            //     test : /\.{less|css}$/,
            //     use : [
            //         "style-loader",
            //         "css-loader",
            //         "less-loader",
            //         "postcss-loader"
            //     ]
            // },
            
        ]
    }
};