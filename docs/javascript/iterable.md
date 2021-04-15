# Iterable and Generator

好多都是E2015及其之后加入的

## Generator

generator是与iterable密切相关的，注意理解

### Function

带asterisk的function: `function*`表示这个函数会返回一个Generator对象(这个对象符合iterator protocol)

调用该函数就会返回一个`iterator`对象

之后再调用这个对象的`next()`方法，生成器函数的函数体就会先执行，到第一个或者下一个`yield`表达式处停下，返回一个对象。该对象包含了yield的值`value`和是否已`yield`完了最后一个`yield`的`done`。

``` javascript
function* foo () {
    yield 1;
}
/* when it is in an object
const obj = {
   *foo () {
      yield 1;
   }
}
*/

let gen = foo()

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Spread syntax (...)

于ES2018加入的，可以把iterable比如函数arguments或者数组给展开。比如，可用于可变参数，对象属性复制和数组生成中。

``` javascript
myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction
[...iterableObj]; // insert all elements from iterableObj to an array
[...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj
let objClone = { ...obj }; // pass all key:value pairs from an object 
```

### Delegation

可以用`yield*`来跳到委托的生成器中。

比如我们可以用这个来获取含有一个对象里面的所有property的数组

``` javascript
const obj = {
    s: 2,
    i: 0,
    t: 0,
    u: 1
};

obj[Symbol.iterator] = function* () {
    yield* Object.keys(this);
};

console.log([...obj]); // [ 's', 'i', 't', 'u' ]
```

这里就是把iteration委托给array了。如果不用delegation，即yield为`yield Object.keys(this);`，就会是这样的

``` javascript
console.log([...obj]); // [ [ 's', 'i', 't', 'u' ] ]
```

### Args passing

也可以传参：比如把参数换成`yield`。但是要注意`next()`一下以停在用yield代替的参数处，再进行传参。

简单一例

``` javascript
const fn = function* () {
    console.log(114514, yield);
}

const gen = fn();

gen.next(); // just to reach the first yield expr
gen.next('1919810');
```

实质，也就只是在前往下一个yield的时候顺便传值了而已

``` javascript
const f = function* () {
    console.log('Before the first yield');
    console.log(yield, yield);
    console.log('After the first yield');
    yield 1919810;
    console.log('The last yield was yielded')
};

const gen = f();

console.log(gen.next()); 
// stop at the first yield
// result: Before the first yield
// { value: undefined, done: false }

console.log(gen.next(114)); 
// pass 114 to replace the first yield and go to next yield
// result: { value: undefined, done: false }

console.log(gen.next(514)); 
// pass 514 to replace the second yield
// Note: Because the arguments of console.log() are filled with a concrete value, so console.log() will be executed
// and go to next field, so return an object with a value of 1919810
// result: { value: undefined, done: false }
// 114 514
// After the first yield
// { value: 1919810, done: false }

console.log(gen.next()); 
// go to next field but it has no next field...
// result: The last yield was yielded
// { value: undefined, done: true }
```

结果

``` shell
Before the first yield
{ value: undefined, done: false }
{ value: undefined, done: false }
114 514
After the first yield
{ value: 1919810, done: false }
The last yield was yielded
{ value: undefined, done: true }
```

## Symbol.iterator

这个东东是用来自定义一个对象的迭代器的。往一个对象里头加`Symbol.iterator`这个property就行了，比如

``` javascript
const obj = {
    *[Symbol.iterator] () {
        yield 114;
        yield 514;
        yield 1919;
        yield 810;
    }
};

class Foo {
    *[Symbol.iterator] () {
        yield 114514;
        yield 1919810;
    }
}

console.log([...obj]); // [ 114, 514, 1919, 810 ]
console.log(Array.from(new Foo())); // [ 114514, 1919810 ]
```

## Symbol primitive

Symbol即符号，这个是js里头的primitive

鸽子中...

## Iterable Protocol

还是鸽子中...
