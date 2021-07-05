'use strict'

const path = require('path');

module.exports = {
    mode:'development',
    target:'node',
    entry:'./server.js',
    output:{
        path:path.resolve(__dirname,'./'),
        filename:'index.js',
    },
    module:{
        rules:[
            // {
            //     test: /\.tsx?$/,
            //     use: [
            //         {
            //             loader: 'ts-loader',
            //             options: {
            //                 // 加快编译速度
            //                 transpileOnly: true,
            //                 // 指定特定的ts编译配置，为了区分脚本的ts配置
            //                 configFile: path.resolve(__dirname, './tsconfig.json')
            //             }
            //         }
            //     ],
            //     exclude: /node_modules/
            // },
        ]
    }
}