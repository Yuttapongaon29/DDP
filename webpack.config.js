module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
          test: /\.css$/,
          include: /node_modules/,
          loader:  'style!css'
      },{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      port: 8008
    },
    devtool: 'source-map'
  };
  