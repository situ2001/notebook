# Function

## 一等公民

就是说，你在js里面，函数不用被特殊对待，它们就像一个对象一样，可以被赋值给变量，可以作为参数传递，也可以存在数组里头...

## Pattern

Function有四种Patterns，如下

1. The method invocation pattern
2. The function invocation pattern
3. The constructor invocation pattern
4. The apply invocation pattern

如果有一个名为`func`的函数

invoke的操作分别是`new func()`, `func()`, `foo.func()`, `func.apply(thisArg, [argsArray])`

## this

已经优化，并发了：[博客](https://blog.situ2001.com/contents/f7dd0265df9c/)

> In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

`this`这个关键字常见，在JavaScript中大概就是执行当前context的对象吧。（个人理解）

大多数情况就是用来查明这个函数是由谁call的，但是要注意Arrow function没有属于自己的argument和this。

函数和箭头函数都可以capture外部this(后者的this是在箭头函数被定义之后就确定的了，为定义处的this)。但前者拥有自己的this，可以作为constructor invocation pattern来使用，用于新建对象。

## argument

函数里面除了拥有this，还有argument。实际上就是一个对象

``` javascript
let fn = function () {
    console.log(arguments);
};

fn(114, 514); // [Arguments] { '0': 114, '1': 514 }
```

传参又是怎么样的呢？

在js函数里头，传的参数的长度不是固定为参数列表中参数的个数。完全可以传多或者传少，只不过要**严格遵循**参数的所在位置

## Closure

闭包，其实实际上的就是：一小块的代码块。在js中，外部的变量，根据context，可以被捕获进closure与之形成闭包。

> This is possible because the function has the access to the context in which it was created.

``` javascript
/** example code for explaining closure */

/** 
 * The function has access to the context in which it was created. This is called closure
 * And it has privileged access to the property even the method returned
*/

//like these
//example 1
var myObject = function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

myObject.increment(114514);
console.log(myObject.getValue()); // 114514

//example 2
var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};
var myQuo = quo('amazed');
console.log(myQuo.get_status()); // amazed

//So, how to set events for each button?

//a bad example. When a button was clicked, it alerts the length of the array of the nodes but not the ordinate.
var add_the_handlers_bad = function (node) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};

//a better example. While setting an event of a button, the i will be passed into the function
//and the events will be handled by a function that return from a function.
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(i);
            };
        }(i);
    }
};
```

## Arrow function

简的来说就是没argument对象和this，因为如此，也就不能用bind, apply和call了。也不能用来做constructor

Differences & Limitations:

- Does not have its own bindings to this or super, and should not be used as methods.
- Does not have arguments, or new.target keywords.
- Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Can not be used as constructors.
- Can not use yield, within its body.
