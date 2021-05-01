(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{257:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"common-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-function"}},[t._v("#")]),t._v(" Common function")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#common-function"}},[t._v("Common function")]),s("ul",[s("li",[s("a",{attrs:{href:"#settimeout-setinterval"}},[t._v("setTimeout & setInterval")])]),s("li",[s("a",{attrs:{href:"#apply-call"}},[t._v("apply & call")])]),s("li",[s("a",{attrs:{href:"#bind"}},[t._v("bind")])])])])])]),s("p"),t._v(" "),s("p",[t._v("这里将会用来记录JavaScript里头经常使用到的一些函数。")]),t._v(" "),s("h2",{attrs:{id:"settimeout-setinterval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-setinterval"}},[t._v("#")]),t._v(" setTimeout & setInterval")]),t._v(" "),s("p",[t._v("那就是"),s("code",[t._v("setTimeout")]),t._v("和"),s("code",[t._v("setInterval")]),t._v("了，之前一直不会英语，导致不知道是什么意思。现在literally读了一下，估计应该是：前者是在一段时间后执行，后者是以某一时间长短为间隔，反复执行。看起来没什么问题毕竟叫做是Timeout和Interval嘛。。。一查发现，的确如此")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nExecute a specified block "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" code once after a specified time has elapsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nExecute a specified block "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" code repeatedly "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" a fixed time delay between each call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("然后它们的返回值是一个数值--"),s("code",[t._v("timeoutID")]),t._v("或者"),s("code",[t._v("intervalID")]),t._v("，都是共享同一个ID池的。")]),t._v(" "),s("p",[t._v("这个ID作用一般是用于传给"),s("code",[t._v("clearTimeout()")]),t._v("或者"),s("code",[t._v("clearInterval()")]),t._v("，以清除timeout或者interval的。")]),t._v(" "),s("h2",{attrs:{id:"apply-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-call"}},[t._v("#")]),t._v(" apply & call")]),t._v(" "),s("blockquote",[s("p",[t._v("The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "),s("strong",[t._v('"A for array and C for comma."')])])]),t._v(" "),s("p",[t._v("就只是传arg的方式不是很一样而已，一个是数组，一个是正常的参数。")]),t._v(" "),s("p",[s("code",[t._v("func.apply(thisArg, [ argsArray])")])]),t._v(" "),s("p",[s("code",[t._v("func.call([thisArg[, arg1, arg2, ...argN]])")])]),t._v(" "),s("p",[t._v("The result of calling the function with the specified this value and arguments.")]),t._v(" "),s("h2",{attrs:{id:"bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[t._v("#")]),t._v(" bind")]),t._v(" "),s("p",[s("code",[t._v("let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])")])]),t._v(" "),s("p",[t._v("这个方法返回一个函数，这个函数有什么特别之处呢。特别之处就是这个函数的this是被bind了，bind就是对象"),s("code",[t._v("thisArg")]),t._v("。")]),t._v(" "),s("p",[t._v("具体怎么操作呢？见下代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unboundGetValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unboundGetValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" boundGetValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boundGetValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in nodejs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the excepted output: undefined 114514")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);