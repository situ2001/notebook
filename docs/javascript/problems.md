# Problems

[[toc]]

## 运算符 || &&

|operator|meaning|statement|
|--|--|--|
| `||` |Logic OR| If expr1 can be converted to true, returns expr1; else, returns expr2.|
| `&&` |Logic AND| If expr1 can be converted to true, returns expr2; else, returns expr1.|

``` javascript
let a = undefined || 114514; // a = 114514
let b = undefined && 1919810; // b = undefined
let c = "you" || "me"; // c = you
let d = "you" && "me"; // d = me
```

根据**短路运算**的规则来理解就行了，比如Logic OR，第一个true就扔回第一个，否则就会比较第二个，因此第一个false就会扔回第二个。Logic AND也是如此。

并且因为js用来判断false和true的是用falsy value和truthy value，所以使用if语句的时候，要注意哪些东西在js里头是false的。

## Falsy values

下面这些表达式都是false的

- null
- NaN
- 0
- empty string ("" or '' or ``)
- undefined

## Global Object

顾名思义就是全局对象。在浏览器下，全局变量(global variable)创建后会被作为是`Window`的一个property

In web browser, when a variable defined with `var` keyword, they are created as the member of the global object.(Node.js does not have this case)

|Environment|Global Object|
|:---:|:---:|
|Web browser|Window|
|Node.js|global|

For example

``` javascript
// on a web browser
var a = 114514;
let b = 114514;
console.log(this.a); // 114514
console.log(this.b); // undefined
// on node.js
var a = 114514;
var b = 114514;
console.log(this.a); // undefined
console.log(this.b); // undefined
```

## for in vs for of

`for ... in ...`循环的是一个对象的property name

`for ... of ...`循环迭代的是一个对象的property value，然而限定了使用的对象，**要是iteratable**的才行，比如`Array`, `Map`, `Set`, `String`, `TypedArray`, `arguments`

``` javascript
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

## template literals

``` javascript
let str = '514';
console.log(`114${str}`); // 114514
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
```

## script标签

这个要注意，因为HTML的加载，是从头加载到尾的，所以如果一个js有与DOM相关的操作，就要等物件都加载完了先。因此最好的方法是把`<script src=""></script>`放在body后面，而不是放在`<head>`里头。

## import

就是模块导入呗，这是ES2015开始才有的功能，注意另外一个导入模块的`require()`并不是标准js api的一部分。是node.js那边特有的一个函数。

``` javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

## export

与import相反，作为模块而导出

``` javascript
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default, … } from …;
```
