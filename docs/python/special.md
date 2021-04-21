# 特有句法

其实py有许多与众不同的syntax

## 比较

```python
if (114 < a < 514) # it is possible!
if (a > 114 and a < 514) # equivalent
```

## 三目运算符

```python
a = i > 15 ? 114 : 514 # wrong!
a = 114 if i > 15 else 514 # Correct!
```

## 重复

```python
str = 'dssq'*3 # dssqdssqdssq
list = [1, 9]*2 # 1919
```

## 反转

```python
str = 'hello'
print (str[::-1]) # olleh
```

## 赋值

```python
a, b, c = 1, 3, 5
accuracy, label = ([15], [114514])
```

## 合并列表与字典

```python
foo = {
    'a': 114,
    'b': 514
}

bar = [1919, 810]

print ({**foo, **foo})
print ([*bar, *bar])
# or
bar.extend(bar)
print (bar)

'''
{'a': 114, 'b': 514}
[1919, 810, 1919, 810]
[1919, 810, 1919, 810]
'''
```

## 列表降维

```python
import itertools

foo = [[2, 3], [114, 514], [1919, 810]]
it = itertools.chain(*foo)

print (list(it)) # [2, 3, 114, 514, 1919, 810]
```

## iterate with enumerate

```python
foo = [2, 3, 114, 514, 1919, 810]

for id, item in enumerate(foo):
    print ('{}: {}'.format(id, item))

'''
0: 2
1: 3
2: 114
3: 514
4: 1919
5: 810
'''
```

## list to str

```python
foo = ['d', 'ss', 'q']
s = ''.join(foo)
print (s) # dssq
```

## list to dict

```python
foo = [x for x in range(4)]
bar = [x**2 for x in range(4)]

print (dict(zip(foo, bar))) # {0: 0, 1: 1, 2: 4, 3: 9}
```

## dict reverse

```python
foo = [x for x in range(4)]
bar = [x**2 for x in range(4)]

d = dict(zip(foo, bar)) # {0: 0, 1: 1, 2: 4, 3: 9}
e = dict(zip(d.values(), d.keys()))
```

## isinstance

```python
foo = 14
isinstance(foo, (int, list)) # True
```

## zip

传iteratable进去

```python
foo = [1, 2, 3, 4, 5]
bar = ['a', 'b', 'c']

print (list(zip(foo, bar)))

for a, b in zip(foo, bar):
    print ('{} {}'.format(a, b))

'''
[(1, 'a'), (2, 'b'), (3, 'c')]
1 a
2 b
3 c
'''
```

## Comprehensions

也就是推导式

```python
foo = [x**2 for x in range(5)] # [0, 1, 4, 9, 16]
bar = {x: x**2 for x in range(5)} # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
foo1 = [x for x in foo if x > 8] # [9, 16]
enum = {x for x in range(1, 5)} # {1, 2, 3, 4}
```

## Generator

像Java的`iterator()`(消费者)

```python
foo = (x for x in range(5))
foo.__next__() # 0
foo.__next__() # 1
# ...

for item in foo:
    print (item) # 2, 3, 4
```
