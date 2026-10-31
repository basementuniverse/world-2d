const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: {
      import: './src/index.ts',
      library: {
        name: 'Lighting2D',
        type: 'umd',
      },
    },
    game: './src/demo/index.ts',
  },
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 500,
    ignored: [
      '**/node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.glsl$/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: '/build/',
    filename: '[name].js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'build'),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  externals: [],
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
