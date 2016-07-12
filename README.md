# minimal-webpack-swagger

測試Webpack編譯swagger codegen js code

# Install

npm link packages/minimal

npm install

# 地雷1

判斷有 define 這個 function 而跑進 AMD 那段程式

```js
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/DefaultApi'], factory);
} else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/DefaultApi'));
}
```

```
ERROR in ./packages/minimal/src/index.js
Module not found: Error: Cannot resolve module 'ApiClient' in /Users/lin/git/swagger/webpack_minimal/packages/minimal/src
 @ ./packages/minimal/src/index.js 32:4-52
```

解法：
Disable AMD https://github.com/webpack/imports-loader#disable-amd

add loader `imports?define=>false`
```js
{
  test: /\.js$/,
  loaders: [ 
    'babel', 
    'imports?define=>false' 
  ],
  exclude: /node_modules/,
  include: __dirname
},
```


# 地雷2

ApiClient 用到 fs
```js
// fs.ReadStream in Node.js (but not in runtime like browserify)
if (typeof window === 'undefined' &&
    typeof require === 'function' &&
    require('fs') &&
    param instanceof require('fs').ReadStream) {
  return true;
}

```

```
ERROR in ./packages/minimal/src/ApiClient.js
Module not found: Error: Cannot resolve module 'fs' in /Users/lin/git/swagger/webpack_minimal/packages/minimal/src
 @ ./packages/minimal/src/ApiClient.js 103:74-87 103:108-121
```

解法：
Include polyfills or mocks for various node stuff https://webpack.github.io/docs/configuration.html#node

webpack.config.js 增加
```
node: {
  fs: 'empty',
}
```
