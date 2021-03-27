# ECMAScript

要写好JS，得了解一下JS的历史

## ES

ECMA指的是European Computer Manufacturer’s Association

ES是脚本语言的一个标准，其实它又是基于早期的JS的...

> Mocha -> LiveScript -> JavaScript -> (part of JS resulted in) ECMA-262 -> ECMAScript -> JavaScript (consists of ECMAScript + DOM + BOM)

### ES5

是ES中的一个老版本，其实在十年前就已经结束了，但是现在浏览器所使用的JS还是ES5...

### ES6

其实是叫做ES2015，是ES中的一个新版本，是现在JS的下一个迭代版本了，是在2015年出来的，当然现在还是会出2016 2017之类的。（虽然现在的浏览器还不支持ES6...

## JavaScript

JS的核心特性就是基于ES的了，只不过在不同环境下，特性和功能是不同的，比如浏览器中的js就多了DOM和BOM。nodejs里头就个ES

## BabelJS

由于ES5还在浏览器上面使用，因此BabelJS用来作为在浏览器中ES5与ES6之间转换的桥梁(ES6 to ES5)。所以你可以在浏览器上面愉悦地使用ES6的js，实际上就是通过BabelJS将ES6的代码转换到了ES5了...

## TypeScript

就是加语法糖嘛。。。实质还是(默认)转换回ES5再运行

## Node.js

几乎支持ES6的特性了，只不过似乎是`import`需要在`package.json`里面加设置...
