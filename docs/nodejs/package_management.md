# 包管理

[[toc]]

主要是npm和yarn

## npm vs npx

前者用来进行包管理用的，后者用来单纯执行包用的，就是带来了便利性。

前者要用包的话需要把包下载到本地存着，再执行。后者是把包下到本地临时目录，临时地执行它，使用它。

- npM - Management
- npX - eXcute

## ES2015模块

怎么说呢，nodejs支持commonJS和ES2015的模块。cjs是同步加载的，es6模块是异步加载的。

commonJS: `require()`来加载，`module.export`输出

ES2015: `import`加载，`export`输出

cjs不能加载es6的模块，因为后者是异步加载且内部可以使用`await`。这样一来，如果用`require()`加载，整个代码就会卡在await的那里。直到await的部分执行完毕才继续执行。

ES2015模块在加载之前有一个静态解析阶段，来确定依赖关系，因此，最底层的模块是第一个被加载的。

CommonJS to ES2015 module，只能先整体引入。单独引用一部分就继续import。同理，export的时候，cjs到es6就也可以这样做，加个wrapper

```javascript
import packageMain from 'commonjs-package';
const { method } = packageMain;

// import then export (CommonJS to ES2015 module)
import cjsModule from '../index.js';
export const foo = cjsModule.foo; 
```
