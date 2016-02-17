var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [  
    './app/app.js',
    'webpack-dev-server/client?http://localhost:3000',
  
  ],
  output: {
     path: 'app/',
     publicPath: 'app',
      filename: './app/prod.js'
  },
   plugins: [
   // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
  ],
   resolve: {
        alias: {
            jQuery: "../../jquery/dist/jquery"
        }
    },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [      
      { test: /\.css$/, loader: "style!css" },
          { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};