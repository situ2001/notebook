# misc

> European Computer Manufacturers Association

## ES

> ES is the abbreviation of ECMAScript

ES5是ES中的一个老版本，但是现在浏览器所用的JS还是ES5实现...当然ES2015这些是能跑起来的（靠Babel

然后ES2015也叫做ES2015，是ES中的一个新版本，是现在JS的下一个迭代版本了，加入了许多的新特性。是在2015年出来的，当然现在还在不断更新着（命名方式是以年为后缀：ES2016 2017...

## JavaScript

> JS's syntax and behavior are defined in the ES specification.

JavaScript是ECMAScript的一个实现，具体syntax与行为，都定义在ES spec里了:[https://www.ecma-international.org/publications-and-standards/standards/ecma-262/](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## TC39

这是一个管理JS spec的委员会

> Their primary task is managing the official specification for the language. They meet regularly to vote on any agreed changes, which they then submit to ECMA, the standards organization.

TS39的一些proposal都可以在这里找到: [https://github.com/tc39/proposals](https://github.com/tc39/proposals)

## 几个JS

> Contrary to some established and frustratingly perpetuated myth, there are not multiple versions of JavaScript in the wild. There's just **one JS**, the official standard as maintained by TC39 and ECMA.

就一个...真的就只有一个JS啊...

## JS in browser

Web browser上面的JS就是包含了JS+DOM+BOM。

不同环境下（比如浏览器，nodejs）的JS加了一些自己的API进去，就比如`alert()`和`console.log`和`console.*`，又或者`fs.write()`（来自nodejs的built-in module）这些方法，其实是没有在JS官方spec里头定义的。

哦还有console只是为了方便做点调试而已。不要完全相信在F12 console里面出现的行为啊。

> Don't trust what behavior you see in a developer console as representing exact to-the-letter JS semantics; for that, read the specification. Instead, think of the console as a "JS-friendly" environment. That's useful in its own right.

## Paradigm

> A board mindset and approach to structuring the codes

JS是一门多范式语言，支持

1. Procedural style
2. OO style
3. FP style

## 方法的命名

是`Array.prototype.includes`而不是`Array.prototype.contains`，又如是`Array.prototype.flat`而不是`Array.prototype.flatten`。是因为有一些第三库有这样的方法，所以为了不破坏现有网页内容，TS39就这样命名了。具体可以参见smoosh门事件

## Backward compatible

这意味着就一旦一个特性被定下后，以后就不会被移除了，以确保老旧的代码能在最新引擎中跑起来。

与之相反的是Forward Compatible，就像是HTML和CSS那样——9加了新特性，但是代码却能在老版本浏览器中跑，但是新特性被忽略了，只处理该浏览器版本支持的特性（

JS不支持这个，这意味着新的syntax和新的API不能在旧版本的引擎上面跑。

## BabelJS

虽然JS不支持Forward Compatible，但是我们写的含新syntax的代码依旧能在浏览器上面跑

举个例子：由于ES5还在浏览器上面使用，因此BabelJS用来作为在浏览器中ES5与ES2015之间转换的桥梁(ES2015 to ES5)。所以你可以在浏览器上面愉悦地使用ES2015，实际上就是通过BabelJS将ES2015的代码转换到了ES5

对于这种转化，我们称之为transpiling。Babel就是一个transpiler，用来将新ES标准的syntax，转化为等效的老syntax

## polyfill

那一些新的API怎么办呢？怎么使这些代码能有前置兼容性呢？那就检查是否有这个API，没有的话就直接定义一个咯，这就是polyfill

比如ES2019才加入的`Promise.prototype.finally`，它的一个简单的polyfill的就像是下面这样的(摘自YDKJSY)

```javascript
if (!Promise.prototype.finally) {
    Promise.prototype.finally = function f(fn){
        return this.then(
            function t(v){
                return Promise.resolve( fn() )
                    .then(function t(){
                        return v;
                    });
            },
            function c(e){
                return Promise.resolve( fn() )
                    .then(function t(){
                        throw e;
                    });
            }
        );
    };
}
```
