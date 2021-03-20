# 函数

js里头的一等公民。

## Pattern

Function可以有四种Patterns，如下

1. The method invocation pattern
2. The function invocation pattern
3. The constructor invocation pattern
4. The apply invocation pattern

## this

`this`这个关键字常见，在JavaScript中大概就是执行当前语句时的对象吧。（个人理解）

在MDN里头呢，解释是这样的（差不多，但是跟个人理解输出的句子好多了）

> In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

大多数情况就是用来查明这个函数是由谁call的，但是要注意两种情况（我目前碰到的）

1. The constructor invocation pattern
2. Arrow function

前者就是要注意，pattern都不同了。后者就要注意没有argument和this的这个问题了。前后者都可以capture外部的this，但是前者可以作为constructor invocation pattern来使用，用于新建对象。

## argument

一个js函数，里面除了拥有this，还有argument。