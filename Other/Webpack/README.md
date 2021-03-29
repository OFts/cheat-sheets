# Webpack

Webpack is a tool that lets you compile JavaScript modules, also known as module bundler.

Given a large number of files, it generates a single file (or a few files) that run your app.

It can perform many operations:
- helps you bundle your resources.
- watches for changes and re-runs the tasks.
- can run Babel transpilation to ES5, allowing you to use the latest JavaScript features without worrying about browser support.
- can transpile CoffeeScript to JavaScript
- can convert inline images to data URIs.
- allows you to use require() for CSS files.
- can run a development webserver.
- can handle hot module replacement.
- can split the output files into multiple files, to avoid having a huge js file to load in the first page hit.
- can perform tree shaking.

[more info](https://flaviocopes.com/webpack/)
Creating and Understanding a Basic Webpack 5 Setup - https://www.youtube.com/watch?v=X1nxTjVDYdQ

## Installation

```bash
npm init -y
npm install webpack webpack-cli --save-dev
```

Project
```bash
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

## Run Webpack

To excute Webpack we can use:
```bash
npx webpack
```

Or you can also change the `package.json` file corresponding to NPM by adding `"build": "webpack"` to scripts. Also another option is to use `"webpack --watch"` to follow changes made in the files.
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```

And then just run `npm run build` to run the script.

### Babel

If you would want to use something like Babel, you should do:
```bash
npm install @babel/core @babel/preset-env babel-loader
```

The Preset-env will automatically set a preset for backwards web browser compatibility.

A `webpack.config.js` could look something like:
```javascript
module.exports = {
  mode: 'development';
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

Then create the `.babelrc` file
```json
{
  "presets": ['@babel/preset-env']
}
```

And then you can run:
```bash
npm run build
```
### mode

An important webpack config setting is the `mode` which is by default set to `production`. In production mode everything will be minified and all of the variables will be *mangled*. But if we change it to `development` the code will be completely different. And we will have a lot of code and comments to better understand what's happening under the hood.

### source-map

A useful tool is also to implement a `source-map`, that maps the relationships between the all-bundled code and the individual function which helps you to troubleshoot. To implement it, just add `devtool: 'source-map'` to the `webpack.confi.js` file.
```javascript
module.exports = {
  mode: 'development';
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map'
}
```

## webpack-dev-server

Another step is to create your own little server.
```javascript
module.exports = {
  mode: 'development';
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    // destination folder
    contentBase: './dist'
  }
}
```

Now you have to install the `webpack-dev-server`.
```bash
npm i -D webpack-dev-server
```

Creating a dev server keeps all of our changes in memory so they update inmediately. The last step is to add a script to initialize the server. In this case we add a `start` script.
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "webpack serve", // start a webpack-dev-server
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```

## Custom entry and output

If you don't want to use the default settings you can set a custom entry and output by editing the `webpack.config.js` file.
```javascript
// import path (Node.js)
const path = require('path')

module.exports = {
  mode: 'development',
  
  // set the entry file
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // use path just as you would do with Node.js
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public'
  }
}
```

## Dynamically set production/development ENV

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "webpack serve", // start a webpack-dev-server
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "NODE_ENV=production webpack",
    "build-dev": "webpack --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```


```javascript
const path = require('path')

const mode = proceess.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,
  
  // set the entry file
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // use path just as you would do with Node.js
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public'
  }
}
```

## Important about babel-preset-env

Babel won't transpile methods that require polyfills like `include`. Imagine you have something like:
```javascript
console.log(['a', 'b', 'c'].includes('b'))
```

When compiled the syntax will be the same meaning that Babel didn't try to transpile it.

## Adding CSS functionality

To transpile CSS you need a css-loader.
```bash
npm i -D css-loader style-loader
```

And modify the `webpack.config.js`.
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader', 'css-style']
      }
    ]
  }
}
```

`style-loader` injects inline styles into the webpage.

Also remember that for this to work properly you have to import the css script into the `index.js` file or the main file.
```javascript
import './style.css';

const headline = "Welcome to the webapage";
document.querySelector('h1').innerText = headline; 
```

## SASS/SCSS Support

First you have to modify the `webpack.config.js` file.
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['css-loader', 'css-style']
      }
    ]
  }
}
```

If we run `webpack` it won't crash but it will not compile the SASS/SCSS code into css. So to fix that we have to install sass and sass-loader.
```bash
npm i -D sass sass-loader
```

Now we can add this new preprocessors to our `webpack.config.js` file.
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['css-loader', 'css-style', 'sass-loader']
      }
    ]
  }
}
```

## Regex breadown for CSS + SCSS + SASS

If you want to work with both css and scss files you must change the regex in the configuration file.
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['css-loader', 'css-style', 'sass-loader']
      }
    ]
  }
}
```

## Outputing a .css file instead of inline css

```bash
npm i -D mini-css-extract-plugin
```


```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin"),

module.exports = {
  plugins: [new MiniCssExtractPlugin()] // Constructor
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['MiniCssExtractPlugin.loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
```

## PostCSS with autoprefixer and fallbacks


```bash
npm i -D postcss postcss-loader postcss-preset-env
```

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin"),

module.exports = {
  plugins: [new MiniCssExtractPlugin()] // Constructor
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['MiniCssExtractPlugin.loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
}
```

To keep the `webpack.config.js` clear and readable we can create a config file for the postcss-loader by creating the corresponding postcss config file `postcss.config.js`.
```javascript
module.exports = {
  plugins: [require("postcss-preset-env")],
};
```

For more info check the documentation on the link [here](https://webpack.js.org/loaders/postcss-loader/).

## Browserslist for more cross-browser control

If you create a `.browserslistrc` file you spcify the broser support you want for `postcss`.
```
last 2 versions
> 0.5%
IE 10
```

By doing this we should observe that now we have autoprefixes added to our compiled file.

## Adding Tailwind

```bash
npm i -D tailwindcss
```

And now we can add it as a postcss config inside the `postcss.config.js`.
```javascript
module.exports = {
  plugins: [require("postcss-preset-env"), require("tailwindcss")],
};
```

The css file is going to be huge but we can find how to purge the tailwind css file through the documentation.

## More info

- Procesamiento de CSSy SASS con Webpack - https://desarrolloweb.com/articulos/procesamiento-css-sass-webpack.html

