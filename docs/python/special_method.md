# 魔法函数

总的来说，一般是`__`开头和结尾的，就是了。如`__init__`, `__str__`等

## str

就像是Java里头的`toString()`

```python
class Foo(object):
    def __init__(self) -> None:
        super().__init__()
    def __str__(self) -> str:
        return 'Hello from foo...'

print (Foo()) # Hello from foo...
```

## 获取属性

python对象的属性可以通过属性`__dict__`来获得

```python
class Foo(object):
    def __init__(self) -> None:
        self.bar = 114514
        self.bar1 = 1919810

print (Foo().__dict__) # {'bar': 114514, 'bar1': 1919810}
```

## Operator overloading

[官方链接](https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types)

py通红也有运算符重载的操作，官方叫法叫做`Emulating numeric types`，通过实现相对应的方法，便可重载掉运算符

> The following methods can be defined to emulate numeric objects. Methods corresponding to operations that are not supported by the particular kind of number implemented (e.g., bitwise operations for non-integral numbers) should be left undefined.

支持这些个`+, -, *, @, /, //, %, divmod(), pow(), **, <<, >>, &, ^, |, +=, -=, *=, @=, /=, //=, %=, **=, <<=, >>=, &=, ^=, |=`，并且还能重载Math里的一些方法...(这里不讨论)例如

`object.__add__(self, other)`

`object.__radd__(self, other)`

`object.__iadd__(self, other)`

分别是`a+b` `b+a` `+=`，没有实现的话就会返回一个`NotImplemented`

而对于其中`__rxxx__`的方法

> These functions are only called if the left operand does not support the corresponding operation 3 and the operands are of different types. 4 For instance, to evaluate the expression x - y, where y is an instance of a class that has an __rsub__() method, y.__rsub__(x) is called if x.__sub__(y) returns NotImplemented.

例如

```python
class Circle(object):
    def __init__(self) -> None:
        self.radius = 2
    def get_area(self):
        return self.radius * self.radius * 3.14
    def __add__(self, other):
        return self.get_area() + other.get_area()

c1 = Circle()
c2 = Circle()

print (c1 + c2) # 25.12
```

## Ellipsis & slice

铺垫，要讲下去，我们先要实现`__getitem__`方法，下面的内容才有意义（比如numpy就是实现了这个方法），比如这个，比如[1, 2, 3]就作为`k`给pass进`__getitem__`里面了，可以说是py里面的一种特殊的运算符重载操作

```python
class T(object):
    def __getitem__(self, k):
        return k

print (T()[1, 2, 3])
print (T()[11:45:14])
print (T()[1, ..., 3])
print (T()[...])
print (T()[1, ..., 114:, :514, :])

'''
(1, 2, 3)
slice(11, 45, 14)
(1, Ellipsis, 3)
Ellipsis
(1, Ellipsis, slice(114, None, None), slice(None, 514, None), slice(None, None, None))
'''
```

普通的`[1, 2, 3]`就是得到了tuple`(1,2,3)`

又可以看到`[11:45:14]`在`__getitem__(self, k)`的作用下产生了一个slice对象，而slice对象的`__init__`是这样的

`class slice(start, stop[, step])`

这样一来就可以理解了`[11: 45: 14]`是从11开始到45结束（不包括），步进是14.

这个玩意平时不出现，但是到了机器学习这，就经常出现了，拿出现频率最高的numpy来说一下吧，一般是出现在对高维数组的refinement上。

首先我们创建了一个三维数组

```python
import numpy as np
x = np.arange(27).reshape((3, 3, 3))
'''
[[[ 0  1  2]
  [ 3  4  5]
  [ 6  7  8]]

 [[ 9 10 11]
  [12 13 14]
  [15 16 17]]

 [[18 19 20]
  [21 22 23]
  [24 25 26]]]
'''
```

要refine?就用到了上面的那个神奇`__getitem__(self, k)`(numpy里面已经实现好了)，如果我们只要一个，比如`19`的话，那就是这样子来做一步一步来:`x[2][0][1]`。而如果我们要得到一维数组数组`[19]`的话那，直接`x[2, 0, 1]`

加入`:`呢？这就是slice切片了，`inclusive:exclusive`这个样子的，比如`0:`就是从0到最后一个元素(inclusive)，而`:2`就是$0\leq element < 2$了，同理`2:3`即$2\leq element < 3$，一个`:`是啥，想必不用说了。上面也提到了。

如果我们这样`x[:2, :, 1:]`切片，就是切成了这样，其实不用多说啥，划重点：看到上面`19`和`[19]`是怎么样refine的了吗？所以，总结规律，我们只需要**按照正常的高维数组refinement的次序**来思考怎么切，切哪里就行了。

```python
print (x[:2, :, 1:])
'''
[[[ 1  2]
  [ 4  5] 
  [ 7  8]]

 [[10 11]
  [13 14]
  [16 17]]]
'''
```

而那个Ellipsis而怎么理解呢？我觉得可以直接literally理解，就是“省略”之意。

加入Ellipsis(其实是一个built-in constant)即`...`就是这样了，有一个五维的数组y，refinement本来是这样的:`y[:2, :, :, :, 3:]`就可以写成`[:2, ..., 3:]`了（在numpy的**具体实现**下），不愧就是Ellipsis省略之意啊。