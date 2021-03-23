# Keywords

some keywords in C++...

## static_cast

``` cpp
static_cast < new_type > ( expression )
```

用于比较安全的转换，比如把long转为int，把子类类型转换为父类类型，指针类型之间的转换。不过要注意有const和volatile不能的转为无的。

``` cpp
long i = 114514;
int j = static_cast<int>(i);
```
