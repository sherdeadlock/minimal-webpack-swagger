# minimal-webpack-swagger

測試Webpack編譯swagger codegen js code

# Install

npm link packages/minimal

npm install

# 地雷1

判斷有 define 這個 function 而跑進 AMD 那段程式

```
ERROR in ./packages/minimal/src/index.js
Module not found: Error: Cannot resolve module 'ApiClient' in /Users/lin/git/swagger/webpack_minimal/packages/minimal/src
 @ ./packages/minimal/src/index.js 32:4-52
```
