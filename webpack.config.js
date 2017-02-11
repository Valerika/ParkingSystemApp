var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    "webpack/hot/only-dev-server",
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/),
      new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: true,
        __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
        }),
      new ExtractTextPlugin({
        filename: "bundle.css",
        allChunks: true
        })
  ],
  module: {
      loaders: [
          {
              test: /\.jsx?/,
              loaders: ["react-hot-loader", "babel-loader"],
              include: path.join(__dirname, "src")
          }, {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },{
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "/images/" }
            }
      ]
  }
}
