# DOM

一些问题和笔记

## click

为什么监听反复设置了一晚上都无效？

>The HTMLElement.click() method simulates a mouse click on an element.

...草这个是模拟点击，而不是指的onlick...要的话请`.onclick`或者`addEventListener('click', func)`
