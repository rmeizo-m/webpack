const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const fs = require('fs');


function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

  return templateFiles.map(item => {
    const parts = item.split('.');
    const [name, extension] = parts;

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      minify: false,
      inject: true,
    })
  })
}

const htmlPlugins = generateHtmlPlugins("src/html/views")


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './js/index.js',
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    
    
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 3000,
    writeToDisk: true,
    overlay :true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './',
              name: '[path][name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ].concat(htmlPlugins)
}