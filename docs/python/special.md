# 特有技巧

其实py有许多特殊的技巧...

## 比较

``` python
if (114 < a < 514) # it is possible!
if (a > 114 and a < 514) # equivalent
```

## 三目运算符

``` python
a = i > 15 ? 114 : 514 # wrong!
a = 114 if i > 15 else 514 # Correct!
```

## 重复

``` python
str = 'dssq'*3 # dssqdssqdssq
list = [1, 9]*2 # 1919
```

## 反转

``` python
str = 'hello'
print (str[::-1]) # olleh
```
