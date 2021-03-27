# 问题记录

## 非链式Promise catch

记录时为2020/03/24

直接报错

``` shell
(node:4796) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: spawn cmd ENOENT
[1] (node:4796) DeprecationWarning: Unhandled promise rejections are deprecated.
In the future, promise rejections that are not handled will terminate the Node.
js process with a non-zero exit code.
```

Handle error，在nodejs里，必须要是链式调用才行

``` javascript
let foo = new Promise(...);
foo.then(...).catch(...);
```

## ES6 module报错

记录时为2020/03/25

``` shell
SyntaxError: Cannot use import statement outside a module
```

需要在`package.json`里头加上`"type": "module"`

> Node.js treats JavaScript code as CommonJS modules by default. Authors can tell Node.js to treat JavaScript code as ECMAScript modules via the .mjs file extension, the package.json "type" field, or the --input-type flag
