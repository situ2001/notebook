# 内建

对于python的内建类、模组和函数的一些笔记

## help

`help([object])`

这是一个内置的函数，可以获得指定的一个类、方法、模组等的帮助，其实这些帮助，是从`docstring`这里derive过来的，比如我这里写点`docstring`，像下面这样，注意写的位置，是在函数或类的body的第一行处写。文字前后用三个双引号圈起来（这很像多行注释）

``` python
class Bar(object):
    """a bar class"""
    def __init__(self) -> None:
        """initialize a Bar"""
        super().__init__()
    def foo(self):
        """
        a foo method

        For example

        ``` python
        print (Bar().foo()) # 114514
        ```

        return `114514`
        """
        return 114514
```

这个`docstring`存于属性`__doc__`之中，此时我们这样

``` python
print (Bar.__doc__)
print (Bar.__init__.__doc__)
print (Bar.foo.__doc__)
```

或者

``` python
help(Bar)
help(Bar.__init__)
help(Bar.foo)
```

都可得到如下结果

``` shell
a bar class
initialize a Bar

        a foo method

        an example

        ``` python
        print (Bar().foo()) # 114514
        ```

        return `114514`
```

## pydoc

链接：[点击此处](https://docs.python.org/3/library/pydoc.html)

为什么我要在`help()`函数下面写这个？因为pydoc生成的文档，靠的就是它内建有的`help()`函数啊。用法都在官方文档里头了，举个例子，把上面的代码文档生成一下。可以这么做，像下面

``` shell
python -m pydoc doc_test # 直接在命令行看doc_test模块的文档
python -m pydoc -p 8080 # 生成指定目录下所有py的文档，并可在http://localhost:8080上访问
python -m pydoc -w doc_test # 生成并保存模块doc_test的文档为HTML到当前目录下
python -m pydoc -k test # 模糊查找含有该字符串的模块的文档
```
