const path = require('path');

//plugins
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/scripts/app.module.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
    historyApiFallback: true // falls back to index.html when the route is not found
  },
  module: {
    rules: [
      { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader', exclude: /node_modules/ },
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' },
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './app/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}