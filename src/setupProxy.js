const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/sliderApi',
        {
            target: "http://10.41.20.220:9999",
            changeOrigin:true,
            pathRewrite: {
                "^/api": "/"
            },
            "secure":true 	//如果访问的是https类的链接，就需要设置为true
        }))
}