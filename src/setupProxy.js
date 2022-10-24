const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/ds_api", {
      target: "https://192.168.0.75:8080/",
      changeOrigin: true,
      pathRewrite: {
        "^/ds_api": "", // URL ^/api -> 공백 변경
      },
    })
  );
};
