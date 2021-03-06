# Problems

[[toc]]

## Strict mode

> Strict mode is like a linter reminding you how JS should be written to have the highest quality and best chance at performance

JS的严格模式，举个例子，在浏览器环境下，严格模式会使得global object变为`undefined`，而不是`Window`

启用方法如下，这条statement前若有代码，那么就会使严格模式不生效

```javascript
// only comments and whitespace are allowed
"use strict";
// code starts here
```

当然也可以用在function的scope上，叫做`function-level strict mode`。比如这个

```javascript
function foo() {
    // only comments and whitespace are allowed
    "use strict";
    // code starts here
}
```

不过ES6的module都是假定在strict mode下的，所以ES6文件的代码都是自动默认为strict mode的（为什么不全部JS文件都默认为严格模式呢？这会break the web）

## Falsy values

这里插入falsy value，为后面比较做铺垫

下面这些值都是false

- `false`
- `null`
- `undefined`
- `NaN`
- `0` (zero)
- `-0` (Number negative zero)
- `0n` (BigInt zero)
- empty string ("" or '' or ``)

## Operator || &&

与此同时，顺便插入跟其他常见语言行为有点不同的`&&`和`||`运算符运算规则

|operator|meaning|statement|
|--|--|--|
| `` |Logic OR| If expr1 can be converted to true, returns expr1; else, returns expr2.|
| `&&` |Logic AND| If expr1 can be converted to true, returns expr2; else, returns expr1.|

```javascript
let a = undefined || 114514; // a = 114514
let b = undefined && 1919810; // b = undefined
let c = "you" || "me"; // c = you
let d = "you" && "me"; // d = me
```

根据**短路运算**的规则来理解就行了，比如Logic OR，第一个true就扔回第一个，否则就会比较第二个，因此第一个false就会扔回第二个。Logic AND也是如此

并且因为js用来判断false和true的是用falsy value和truthy value，所以使用if语句的时候，要注意哪些东西在js里头是falsy的。

## 值的比较

update：见[博客](https://blog.situ2001.com/contents/d2b42a9c0258/)

## Global Object

顾名思义就是全局对象。在浏览器下，全局变量(global variable)创建后会被作为是`Window`的一个property

In web browser, when a variable defined with `var` keyword, they are created as the member of the global object.(Node.js does not have this case)

|Environment|Global Object|
|:---:|:---:|
|Web browser|Window|
|Node.js|global|

For example

```javascript
// on a web browser
var a = 114514;
let b = 114514;
this; // Window
console.log(this.a); // 114514
console.log(this.b); // undefined
// on node.js
var a = 114514;
var b = 114514;
console.log(this); // undefined
console.log(this.a); // undefined
console.log(this.b); // undefined
```

## let

了解这个之前可以了解一下js的scope，[文章点此](https://blog.situ2001.com/contents/d5c78114ba70/)

> The let statement declares a block-scoped local variable, optionally initializing it to a value.

跟var声明的变量的scope为函数或全局的这一点不一样，let声明的是个具有block-scope的本地变量，即它的作用域是在一个block内，并且在同一个块里面，我们**不能重复声明**同一个变量。比如我们这样做就会发生错误

```javascript
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

而要做的，只需要把每个case后面的statement使用brace`{}`括起来就行了，比如

```javascript
case 0: {
  let foo;
  break;
}
```

`var`和`let`的行为都是差不多的，只是scope的不同，以及`let`有TDZ临时死区

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

`let`还能被用来创建`{}`scope的private variable，比如这个(其实`var`的话，利用closure+IIFE就行了)

```javascript
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope); // "undefined"

var thing = new Thing();

console.log(thing); // Thing {someProperty: "foo"}

thing.showPublic(); // "foo"

thing.showPrivate(); // 1
```

let不会在global object上面创建一个property

> At the top level of programs and functions, let, unlike var, does not create a property on the global object.

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

还有一个特性TDZ(temporal dead zone)，叫做临时死区。

可以理解为在初始化之前被使用就会报错，而全局变量只会`undefined`，这是因为，虽然两者都有变量提升(即变量的声明位置被提到了该变量的顶层作用域的开头，比如var的就是全局作用域，let就是局部的)，但是var声明的变量，在到赋值语句前，只是`undefined`，而let的话会直接报错。

```javascript
{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

与此同时，还有一个`const`，这个的行为跟`let`是差不多的，只不过`const`常量要在声明的时候赋值，且之后就不能更改赋的这个值了。

> A third declaration form is const. It's like let but has an additional limitation that it must be given a value at the moment it's declared, and cannot be re-assigned a different value later.

## for in vs for of

`for ... in ...`，迭代的是一个对象的enumerable property name

`for ... of ...`，迭代的是一个对象的property value，然而限定了使用的对象，**要是iteratable**的才行，比如`Array`, `Map`, `Set`, `String`, `TypedArray`, `arguments`

```javascript
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
```

`for..of`循环还可以这样，一般来说，JS内建的iterable都有下面几个方法：`keys()`, `values()`和`entries()`

```javascript
var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}
// [0]: 10
// [1]: 20
// [2]: 30
```

## template literals

```javascript
let str = '514';
console.log(`114${str}`); // 114514
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
```

## 文件即程序

在JS里头，每一个文件就被当成一个**独立**的程序。多个js文件被加载之后，其实是每个单独的js文件通过`global scope`来共享它们之间的状态的，所以运行的时候它们就在一起工作了。（这就是网页有时候有多个js，但是一两个加载失败之后，网页的部分功能还能运作的原因）

ES6之后加入了module这个东西，只要一个文件有`import`之类的语句，或者在HTML上用tag `<script type=module>`，那么这个文件就会被当为ES6模块，不过ES6模块还是被视作为一个单独的文件。一个模块被import的时候，工作起来还是那样，如下

> Similar to how "global scope" allows standalone files to mix together at runtime, importing a module into another allows runtime interoperation between them.
