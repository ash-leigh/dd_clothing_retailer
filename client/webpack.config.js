config = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map'
}

module.exports = config;