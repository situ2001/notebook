# Asynchronous

这个嘛，我是看MDN里面对于异步的解释的，可以更加清晰地了解它。

先放链接吧: [asynchronous in javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

一般代码是顺序执行的，但是这很魔性，如果说你的页面，要做一点时间长一点的事情(比如说网络请求，读取json等)。那么，在这些事情执行的时候，后面的就会一直在等待，因此整个页面就会冻住了。直到那件事情做完之后。

比如说很好的一个例子就是`alert()`这个函数，在点击它的OK之前，后面的代码都不会被执行，这个函数可以很好地演示同步的缺点，这个缺点在现实使用中会使人烦恼。

## Callback

回调函数就是一个函数，用来作为参数，来传给会在后台运行的函数。

> Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background.

## Implementation

目前对于操作系统的理解不是很深刻，我只知道js是单线程非阻式的实现。怎么实现的呢？我摘抄了MDN里面的一段话

> Async operations like promises are put into an event queue, which runs after the main thread has finished processing so that they do not block subsequent JavaScript code from running. The queued operations will complete as soon as possible then return their results to the JavaScript environment.

看起来要异步执行的操作，先是被存放在一个事件队列里头了，然后再在主线程空闲的时候来执行。

我们也可以用一段代码来实现一下，我们可以在主线程里头循环`console.log()`输出114514次一个变量，然后设置一个3秒的`setTimeout()`来输出hello world

``` javascript
setTimeout(() => console.log("Hello world"), 3000);
for (var i = 0; i < 114514; i++) {
  console.log(i);
}
```

理论上三秒就能执行输出hello world了，但是这个倒是在等了十多秒，也就是for循环结束之后才输出。这就符合这个异步的实质

``` shell
114512
114513
114514
Hello world
```

是用了队列来handle异步

那么计时呢？其实js运行代码的线程就一个，而其他的用于setTimeout计时、ajax之类，是用其他线程来handle的。

## When to use

MDN给的conclusion

> Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.
>
> There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.
>
> If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the main thread and complete the task asynchronously. Over time, you'll learn when it makes more sense to choose an asynchronous technique over a synchronous one.
