# Object

[[toc]]

## Primitive & Object

在JS里头，value有两种--primitive和object

几种primitive，它们分别是 `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`

primitive的特点就是immutable，也就是说它们的值不能被更改。即不像数组，对象，函数那样，可以把自身的property或value给更改。如果一个被赋值了primitive value的变量的value被更改，那就是被重新赋了个新值。

> All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

而Object类型变量(reference variable)，objects are held by reference。跟Java是差不多的.

```javascript
let a = { x: 114514 };
let b = a; // copy the reference and assign to b
b.x = 1919810;
console.log(a.x); // 1919810

let c = 114514;
let d = c; // assigning a new primitive, but not copying the reference
d = 1919810;
console.log(c); // 114514
```

`undefined`指的是一个value的值为empty，一般来说，就是变量没有被赋值。这跟`null`有点不一样

`Symbol`是一个有特殊用途的primitive，表现为一个隐藏的值。通常作为一个对象的特殊的key

`function`和`array`是特殊的Object类型

`typeof`这里也有一点坑，理论上primitive就显示对应的类型，但是`null`却不是如此

```javascript
typeof function() {} // "function"
typeof [1919, 810] // "object" but not "array"
typeof null // "object" but not "null"
```

## 原型链

面向对象&继承，js跟Java/C++里的类不一样，js用的是函数模拟实现，继承靠的是原型链

1. Function对象是一个比较特殊的对象。且pattern为constructor的Function拥有prototype(原型对象)
2. `__proto__`是创建了该对象的对象

![wow prototype](./images/photo_2021-01-31_18-25-34.jpg)

prototype是一个对象，是函数的**原型对象**。`prototype`调用constructor来构建一个新对象，并使得该新对象的`__proto__`为`func.prototype`

图中`new Foo()`产生的对象，其`__proto__`是`Foo.prototype`，`function Foo()`只是个`constructor`罢了。

```javascript
function a () {
    this.i = 114514;
}
typeof a.prototype // object
typeof Function.prototype // function
```

这里，a创建的是对象，Function创建的是一个function

继承关系:一个对象在寻找property的时候，会从自己开始，顺着原型链`__proto__`来找，直到找到了或碰到null为止。

## Object.create

`Object.create()`是直接使用现有的对象，作为新建对象的proto。

```javascript
const foo = {
    name: "situ2001",
    isHuman: true
};

const bar = Object.create(foo); // create bar {} from the proto of foo
bar.__proto__ // foo
```

我们甚至可以把`null`当参数，这样一来，这个对象就没有`__proto__`了，又根据原型链的继承关系，很多继承于上层对象的方法，比如`toString()`就不可用了。

### new

new就是相当于创建了继承于`func.prototype`的新对象，再使用`apply()`将this指向这个对象

```javascript
// a simple implementation
var obj = Object.create(func.prototype);
func.apply(obj, [args]);
```

```javascript
let foo = function () {
    this.x = 114;
    this.y = 514;
};

let bar = Object.create(foo.prototype);
foo.apply(bar);

console.log(bar); // foo { x: 114, y: 514 }
```

## Object.hasOwnProperty

只会判断这个property是否是自己的，而不会通过原型链来找(毕竟叫做own property)
