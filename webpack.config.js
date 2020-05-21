const path = require('path');
module.exports ={

    mode:"development",
    entry: "./src/js/index.js",
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'build.js',
        publicPath: '/dist'  
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}   