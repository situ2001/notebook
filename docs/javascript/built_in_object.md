# Built-in objects

## Set

集合，很常见的。不过特殊的是，js里头的集合，可以装primitive和object

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

## WeakSet

`weak`在哪里呢？

> The WeakSet is weak, meaning references to objects in a WeakSet are held weakly.

这意味着只能存object，一但里面存放的对象没有被任何一个引用变量所引用，那么它就会被垃圾回收掉。
