const path = require('path')
var BabelPlugin = require('babel-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              url: false,
              includePaths: [path.resolve(__dirname, 'src/styles')],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new BabelPlugin({
      test: /\.js$/,
      presets: [
        [
          'env',
          {
            exclude: ['transform-regenerator'],
            loose: true,
            modules: false,
            targets: {
              browsers: ['>1%'],
            },
            useBuiltIns: true,
          },
        ],
      ],
      sourceMaps: false,
      compact: false,
    }),
  ],
}
