



module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build/public/`,
    filename: 'bundle.js',
    publicPath: 'public/',
  },

  devtool: 'source-map',
  module: {
    rules: [


      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },




      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
          }
        }
      }






    ]
  }
}