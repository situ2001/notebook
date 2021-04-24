# Class & Module

## Class

函数在JS中，有许许多多的形式。比如说ES6加进来的`class`

```javascript
class Foo {}
typeof Foo // "function"
```

最好是与ES6之前的一样写法进行比较 -> 文章咕咕中

### Basis

```javascript
class Bar {}
class Foo extends Bar {}
```

## Module

module和class这两者，在本质上，是差不多的：都是把数据和行为给封装到一个逻辑单元上去。并可以控制外部对内部成员的访问权限。

只不过这两者的syntax有较大的不同。

### Classical

读过The good part这本书，基本的模块是像这样的。

```javascript
let Foo = function(number, comment) {
    var publicObject = {
        print() {
            console.log(`No.${number}, comment is ${comment}`);
        },
        reset(newNumber) {
            if (typeof number === 'number') {
                number = newNumber;
            }
        }
    }

    return publicObject;
};

let Bar = function(number, comment, name) {
    var father = Foo(number, comment);

    var publicObject = {
        print() {
            father.print();
            console.log(`Commenter: ${name}\n`);
        },
        reset(newNumber) {
            father.reset(newNumber);
        }
    }
    
    return publicObject;
}

let t = Bar(114514, 'dssq', 'senpai');
t.print();
t.reset(1919810);
t.print();

/*
No.114514, comment is dssq
Commenter: senpai

No.1919810, comment is dssq
Commenter: senpai
*/
```

这里利用的是闭包

### ES module

自ES6开始引入的。思想跟上面的都差不多，只不过实现有较大的不同。

一般来说，常见的ES module有AMD(Asynchronous Method Definition), UMD(Universal Method Definition), CommonJS(Classical Node.js-style modules)

这里不再像上面那样，使用一个函数来封装一个模块，ES模块是file-based的，它的context是整个文件：一个文件即一个模块

上面的传统JS module写法，可以这样

```javascript
// in module file 'test.js'
export function Foo(number, comment) { /* ... */};
```

我们可以使用以下syntax来import

```javascript
// in other file
import Foo from "test.js"; // or
import { Foo as createFoo } from "test.js"; // or
import * as test from "test.js";
```

并且，一个模块就是一个实例，这个规则可以应用至单例(Singleton)设计模式中去。

这意为着你在模块里面写好数据和方法之后，只需要`export`要暴露的成员就行了。例如

```javascript
let a = 1;
let b = 2;
let c = 9;
export let i = 114514;
export { a, b };
export default c;
```
