const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./assets/src/js/main.js', './assets/src/css/main.css'],
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
