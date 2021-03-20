# Common function

[[toc]]

这里将会用来记录JavaScript里头经常使用到的一些函数。

## setTimeout & setInterval

那就是`setTimeout`和`setInterval`了，之前一直不会英语，导致不知道是什么意思。现在literally读了一下，估计应该是：前者是在一段时间后执行，后者是以某一时间长短为间隔，反复执行。看起来没什么问题毕竟叫做是Timeout和Interval嘛。。。一查发现，的确如此

``` javascript
setTimeout()
Execute a specified block of code once after a specified time has elapsed.
setInterval()
Execute a specified block of code repeatedly with a fixed time delay between each call.
```

## apply & call

> The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is **"A for array and C for comma."**

就只是传arg的方式不是很一样而已，一个是数组，一个是正常的参数。

`func.apply(thisArg, [ argsArray])`

`func.call([thisArg[, arg1, arg2, ...argN]])`

The result of calling the function with the specified this value and arguments.

## bind

`let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])`

这个方法返回一个函数，这个函数有什么特别之处呢。特别之处就是这个函数的this是被bind了，bind就是对象`thisArg`。

具体怎么操作呢？见下代码

``` javascript
const mod = {
  value: 114514,
  getValue: function () {
    return this.value;
  }
};

const unboundGetValue = mod.getValue;
console.log(unboundGetValue());

const boundGetValue = mod.getValue.bind(mod);
console.log(boundGetValue());

// in nodejs
// the excepted output: undefined 114514
```
