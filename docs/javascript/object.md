# Object

[[toc]]

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

## 值的类型

update：见[博客](https://blog.situ2001.com/contents/d2b42a9c0258/)

## instanceof

`instanceof`运算符用于判断一个对象是否拥有该构造函数的prototype。

```javascript
// obj instanceof constructor
obj instanceof Object
```

要注意到这个运算符的一些行为

例如，`string`可以是`primitive`也可以是`object`。`primitive`其实是可以被wrap成`object`(像Java的wrapper class一样)。所以`number`, `boolean`这些，也会出现下面的行为。

``` javascript
let s1 = '114514'
let s2 = new String('1919810')
s1 instanceof String // false
s2 instanceof String // true
typeof s1 // 'string'
typeof s2 // 'object'
```
