# 问题记录

## 非链式的Promise catching

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
