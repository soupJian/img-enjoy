module.exports = {
  publicPath: './',
  devServer: {
      open: true, // 配置自动启动浏览器
      proxy: {
        '/api': {
            target: 'http://175.24.116.96:3300',   // 需要请求的地址
            ws: true,
            secure: false,
            changeOrigin: true,  // 是否跨域
            pathRewrite: {
              '^/api': ''
            }
        }
      }  // 配置多个代理
  }
}