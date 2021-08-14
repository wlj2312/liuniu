module.exports = {
    // 假如想在同一个域名下配置多个项目,当前项目前缀是 /vue1
    
    // 基本路径，如果是生产(也就是run build) 那么生成的 index.html 文件，引入的js，css路径前缀会是 /vue1/ 
    publicPath: '/index' ,
    // 输出文件目录
    outputDir: 'index',
 
    devServer: {
        // 是否自动弹出浏览器页面
        open: true,
        // 设置为0.0.0.0则所有的地址均能访问 
        host: '0.0.0.0',
        // 端口
        port: '8888',
        https: false,
        hotOnly: false,
        // 代理配置
        proxy: {
            '/proxyApi_vant': {
                // 后端接口地址
                target: 'http://localhost:8090',
                changeOrigin: true,
                // 重写路径,把 proxyApi 去掉
                pathRewrite: {
                    '^/proxyApi_vant': ''
                }
            }
        },
    }
}