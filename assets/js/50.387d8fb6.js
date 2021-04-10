(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{263:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内建功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内建功能"}},[t._v("#")]),t._v(" 内建功能")]),t._v(" "),a("p",[t._v("对于python的内建类、模组和函数的一些笔记")]),t._v(" "),a("h2",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[t._v("#")]),t._v(" help")]),t._v(" "),a("p",[a("code",[t._v("help([object])")])]),t._v(" "),a("p",[t._v("这是一个内置的函数，可以获得指定的一个类、方法、模组等的帮助，其实这些帮助，是从"),a("code",[t._v("docstring")]),t._v("这里derive过来的，比如我这里写点"),a("code",[t._v("docstring")]),t._v("，像下面这样，注意写的位置，是在函数或类的body的第一行处写。文字前后用三个双引号圈起来（这很像多行注释）")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""a bar class"""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""initialize a Bar"""')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        a foo method\n\n        For example\n\n        ``` python\n        print (Bar().foo()) # 114514\n        ```\n\n        return `114514`\n        """')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514")]),t._v("\n")])])]),a("p",[t._v("这个"),a("code",[t._v("docstring")]),t._v("存于属性"),a("code",[t._v("__doc__")]),t._v("之中，此时我们这样")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__doc__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("都可得到如下结果")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("a bar class\ninitialize a Bar\n\n        a foo method\n\n        For example\n\n        ``"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(" python\n        print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 114514")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514")]),t._v("`\n")])])]),a("h2",{attrs:{id:"pydoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pydoc"}},[t._v("#")]),t._v(" pydoc")]),t._v(" "),a("p",[t._v("链接："),a("a",{attrs:{href:"https://docs.python.org/3/library/pydoc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击此处"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为什么我要在"),a("code",[t._v("help()")]),t._v("函数下面写这个？因为pydoc生成的文档，靠的就是它内建有的"),a("code",[t._v("help()")]),t._v("函数啊。用法都在官方文档里头了，举个例子，把上面的代码文档生成一下。可以这么做，像下面")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python -m pydoc doc_test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接在命令行看doc_test模块的文档")]),t._v("\npython -m pydoc -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成指定目录下所有py的文档，并可在http://localhost:8080上访问")]),t._v("\npython -m pydoc -w doc_test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成并保存模块doc_test的文档为HTML到当前目录下")]),t._v("\npython -m pydoc -k "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模糊查找含有该字符串的模块的文档")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);