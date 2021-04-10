# Keywords

## typeof

要确定一个js变量的类型，可以使用`typeof`关键字

``` javascript
let i = 114
console.log(typeof i) // number

let f = () => console.log('dssq');
console.log(typeof f); // function
```

## let

> The let statement declares a block-scoped local variable, optionally initializing it to a value.

跟全局变量var不一样，let声明的是个具有block-scope的本地变量，即它的作用域是在一个block内，并且在同一个块里面，我们**不能重复声明**同一个变量。比如我们这样做就会发生错误

``` javascript
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

而要做的，只需要把每个case后面的statement使用brace括起来就行了，比如

``` javascript
case 0: {
  let foo;
  break;
}
```

很多时候，`var`和`let`的行为都是差不多的，但是有几种情况。

``` javascript
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

由于 let statement declares a block-scoped local variable，所以我们可以利用这个特性外加闭包来创建`private member`。比如这个

``` javascript
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

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

然后，let不会在global object上面创建一个property

> At the top level of programs and functions, let, unlike var, does not create a property on the global object.

``` javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

还有一个特性TDZ(temporal dead zone)，中文叫做临时死区。

可以理解为在初始化之前被使用就会报错，而全局变量只会`undefined`，这是因为两者都有变量提升(即变量的声明位置被提到了该变量的顶层作用域的开头)的特性，但是var只是undefined，而let的会直接报错。

``` javascript
{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

这个例子中的`bar`和`foo`都被提升到作用域的开头，并在对应行才进行赋值。但是由于用let声明的`foo`有临时死区，所以在这个死区里有使用，就会报错。而`bar`只有`undefined`出现。

## const

这个和let是差不多的，只不过const的，必须要在声明的时候顺便初始化，并且不能被重新赋值。
