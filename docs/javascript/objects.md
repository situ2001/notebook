# Objects

## Primitive & Object

在JS里头，也有几种基本数据类型，它们分别是 `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`

primitive的特点就是immutable，也就是说它们不能被更改，不能被更改指的是，不能像数组，对象和函数那样地把自己的property和value给更改。如果一个primitive变量的值被更改了，那他就是被重新赋了个新值了。

> All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

而对象类型的赋值就是赋引用reference了，这跟Java是差不多的

``` javascript
let a = { x: 114514 };
let b = a; // copy the reference and assign to b
b.x = 1919810;
console.log(a.x); // 1919810

let c = 114514;
let d = c; // assigning a new primitive, but not copying the reference
d = 1919810;
console.log(c); // 114514
```

## 原型链

一图以蔽之，只需要理解到

1. Function对象是一个比较特殊的对象，拥有prototype(原型对象)
2. `__proto__`的值是创建了该对象的对象

![wow prototype](./images/photo_2021-01-31_18-25-34.jpg)

由于`constructor invocation pattern`的函数需要存储一个对象里面的property和function，因此需要`prototype`，prototype的值是一个真实存在的对象，是函数的**原型对象**，可以理解为用来创建对象的蓝图，直接“印”出来一个对象。比如，图中`new Foo()`产生的对象，其`__proto__`是`Foo.prototype`，`function Foo()`只是个`constructor`罢了。

``` javascript
function a () {
    this.i = 114514;
}
typeof a.prototype // object
typeof Function.prototype // function
```

在这里，同是prototype，一个是object，一个是function。但是是合理的，用函数`a`来创建一个对象的时候，调用了`new a()`，就由原型对象那实例化返回来一个object。同理，创建函数的时候，实际上是调用了`Function()`这个函数，返回的来的是一个function，这不是很合理吗？？

继承关系:一个对象在寻找property的时候，会从自己开始，要是自己没有，则顺着原型链即`__proto__`属性来找，直到找到了或碰到null为止。而`hasOwnProperty(property)`只会判断这个property是否是自己的，而不会通过原型链来找(毕竟叫做own property)
