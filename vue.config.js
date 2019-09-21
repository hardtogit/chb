module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/chb/dist/` : '/',

  devServer: {
    disableHostCheck: true,
  },
};
