# 问题记录

## asterisk

字典与参数 或 列表与参数 之间的 相互转化

Inside a function header(转化为tuple或字典):

`*` collects all the positional arguments in a tuple.

`**` collects all the keyword arguments in a dictionary.

``` python
def func(*args, **kargs):
    # ...
func(1, 14, 514, a=1, b=2, c=3)
```

In a function call(转化为参数):

`*` unpacks a list or tuple into position arguments.

`**` unpacks a dictionary into keyword arguments.

``` python
l = [114, 514] # f(*l) -> f(114, 514)
d = {'a': 114, 'b': 514} # f(**d) -> f(a=114, b=514)
```

比如

``` python
def func(a, b=None, *args, **kwargs):
    print (a)
    print (b)
    print (args)
    print (kwargs)

func(1, 14, *[514, 1919], chou='810')

'''
1
14
(514, 1919)
{'chou': '810'}
'''
```

## Traceback

报错了，怎么看traceback呢，它**不像**java的stacktrace那样读，有句话很关键: **most recent call last**，即最近的call是在最下面的！所以，整个过程是要从上往下看的。

``` python
def test(str):
    print ('Hello, ' + st)

test('Tom')

''' RUN
Traceback (most recent call last):
  File "C:\Users\situ\codes\python\test1.py", line 4, in <module>
    test('Tom')
  File "C:\Users\situ\codes\python\test1.py", line 2, in test
    print ('Hello, ' + st)
NameError: name 'st' is not defined
'''
```

## list vs array

列表与数组，有什么区别呢？好像在python里面，我很少会见到array啊。经常见的，也就只有list和tuple，后者就是不可更改的前者。

查阅之后，发现一个能放`Any`元素，一个只能放特定类型的元素，不过python呢，不自带array，只有list和tuple，所以想要数组的话，需要第三方包，比如`numpy`（怪不得我很少在py里见到array

## scope

``` python
def test():
    if some_condition:
        a = 3
    else:
        a = 5
    # If the above nesting created a new scope, "a" would
    # now be out of scope.
    print a
```

就除了function和class之外，几乎是不存在scope的了。

并且变量名**就只是一个name**而已，它指到某一个对象上。