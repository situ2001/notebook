# Asynchronous

这个嘛，我是看MDN里面对于异步的解释的，可以更加清晰地了解它。

先放链接吧: [asynchronous in javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

一般代码是顺序执行的，但是这很魔性，如果说你的页面，要做一点时间长一点的事情(比如说网络请求，读取json等)。那么，在这些事情执行的时候，后面的就会一直在等待，因此整个页面就会冻住了。直到那件事情做完之后。

比如说很好的一个例子就是`alert()`这个函数，在点击它的OK之前，后面的代码都不会被执行，这个函数可以很好地演示同步的缺点，这个缺点在现实使用中会使人烦恼。

## 什么是回调

看解释说明，回调函数就是一个函数，用来作为参数，来传给会在后台运行的函数。

> Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background.

## 一个例子

就是`XMLHttpRequest`和`Promise`了，后面就是前者更加现代的版本。见代码，结合了catch和then callback

``` javascript
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
```

## 异步的实现

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

## Promise

也是一种异步，这是ES6引进来的新东西

Q: 为什么名字叫做Promise?

> In essence, it's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence the name "promise."

Essentially, a Promise is an object that represents an intermediate state of an operation — in effect, a promise that a result of some kind will be returned at some point in the future. There is no guarantee of exactly when the operation will complete and the result will be returned, but there is a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.

Promise可以handle一个未知量，当这个未知的量变为已知之后，就可以处理它了。

### 三个阶段

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

![Step](./images/promises.png)

由于方法`then()`与`catch()`都return一个Promise，因此Promise可以被链式调用。

由图可看，then(.., onRejection)是可选的，error也可以由`catch(onRejection)`来handle

### 例子

``` javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

由于Promise保证了异步，因此就算是看起来能够马上被执行的函数，也会在栈空了且clock-tick过了一个之后才会被执行

``` javascript
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

### Promise区别

> Promises have some similarities to old-style callbacks. **They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.**

长难句...我的翻译是：它们都是一个你可以把回调函数附加到到它们里面的返回来的对象，就不用额外将回调扔回一个函数里。

实际翻译: 它们本质上是一个返回的对象，您可以将回调函数附加到该对象上，而不必将回调作为参数传递给另一个函数。

### async关键字

有了上面的铺垫，现在一句话就能说清楚了。

加这个关键字的函数，就会是一个Promise-based function，返回值就会是一个Promise

``` javascript
let hello = async function() { return "Hello" };
hello(); // Promise {<fulfilled>: "hello"}
hello().then((value) => console.log(value)); // hello
```

### await关键字

接着，与async关键字配合的就是`await`了，它**只能**用在async函数里头

await only works inside async functions within regular JavaScript code.

在Promise-based的函数前加await，可以让code暂时停下，直到这个函数执行完毕。

await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

``` javascript
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  // works only inside async functions
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

而如果把await去掉

``` javascript
var x = resolveAfter2Seconds(10); // await removed
```

就会打印出 `Promise {<pending>}`

## 使用策略

MDN给的conclusion

> Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.
>
> There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.
>
> If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the main thread and complete the task asynchronously. Over time, you'll learn when it makes more sense to choose an asynchronous technique over a synchronous one.
