const path = require("path");// 路径工具
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // .vue 文件中的文本提取插件
const CopyWebpackPlugin = require("copy-webpack-plugin");//文件拷贝插件

module.exports = {
    entry: {
        index: [
            "./src/index.js",
            'file-loader?name=index.html!pug-html-loader!./src/index.pug',
            'file-loader?name=iview.css!less-loader!./src/iview.less'
        ]//首页入口
    },

    //输出配置
    output: {
        path: path.resolve(__dirname, 'dist/'),//输出目录  __dirname 为 项目当前目录
        filename: '[name].js', // 输出文件名  name代表  entry中的 name值
        chunkFilename: 'chunk/[name].[chunkhash].js',// 模块的文件打包名以及加载请求地址，chunkhash 文件hash
        publicPath: "/dist/" //动态加载文件时的上下文，会添加到文件地址前，可根据需求具体修改
    },

    //模块配置
    module: {
        //文件加载器配置
        rules: [
            {
                test: /\.vue$/,//vue 加载器
                loader: 'vue-loader',
                options: {
                    // .vue 文件中的样式 脚本 加载器配置
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader!autoprefixer-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
                        es6: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env'],
                                plugins: ['transform-runtime']
                            }
                        }
                    }
                }
            },
            {
                //js es6 转换
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-html-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
            // ,
            // {
            //     //html 加载
            //     test: /\.html$/,
            //     use: {
            //         loader: "html-loader"
            //     }
            // },
        ]
    },
    resolve: {
        alias: {
            // require中 使用的  别名
            Components: path.resolve(__dirname, "src/components/"),
            Pages: path.resolve(__dirname, "src/pages"),
            vue: 'vue/dist/vue.min.js'
        },
        // require中 自动追加的后缀名  * 用来 全名时匹配，替代 webpack 1.0 中的 空字符串
        extensions: ["*", ".vue", ".js"]
    },
    plugins: [
        //css 加载
        // new ExtractTextPlugin("css/[name].css"),
        // new TransferWebpackPlugin([{from: "src/plugin", to: "plugin"}, {from: "src/theme", to: "theme"}]),
        //文件拷贝
        new CopyWebpackPlugin([
            {from: "src/plugin", to: "plugin"},
            {from: "src/resources", to: "resources"}
            // {from: "src/theme", to: "theme"}
            // {from: "src/index.html", to: "index.html"}
        ])
    ]
};