# Webpack-React-HotReaload boilerplate
## with build in Stylus

## What does it have*

- __webpack__ itself
- __hot-reload__ with _browserSync_
- __ReactJS__ + __Redux__
- __Stylus__ _(with adoptor to PostCCS: [poststylus](https://github.com/seaneking/poststylus))_
- __PostCSS__

*_the whole list of dependencies you can find in `package.json` file_

## Installation
```
npm install
```

### Develop
```
npm run dev
```
This will run dev-server without any physical files appeared in the file's tree. It will watch all your js/styl code changes and immediately will reload the actual view.
__But__ if you make changes in webpack.config files and/or add new files to file's tree, you will have to restart webpack with `npm run dev` again.

### Build
```
npm run build
```
This will build your project in separate folder `dist` in the root of your project _(in the same level with your `src`, `webpack` folders)_.

It will generate `index.html`, `main.js` _(minified)_, `main.css` _(also minified)_ and automatically inject `js` and `css` into `index.html` for you.

So you will have something like this:
```
└───dist/
    ├───index.html
    ├───main-10db5a6f2cae57e9e315.min.css
    ├───main-10db5a6f2cae57e9e315.min.js
    └───webpack.stats.json
```
The last file with stats of the build will be created by `stats-webpack-plugin`. For more information look [here](https://www.npmjs.com/package/stats-webpack-plugin)

## About
`webpack` folder contains two configs:
- `webpack.config.js` for development
- `webpack.config.production.js` for production build

`src` folder contains the bench of files for demonstration purpose. They can and definitely should be changed on your actual files :)

`src/stylus` folder contains __**.styl__ files. You should look what are the methods to connect styles to your project.

## And more
in order to __stylus__ works properly you should connect `src/stylus/index.styl` into the `src/main.js`:
```
import './stylus/index.styl';
```
