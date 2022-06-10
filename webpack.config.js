const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: path.resolve(__dirname, 'src', 'index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
}