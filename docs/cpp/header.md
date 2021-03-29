# Header

C/C++可以在头文件里面做function, namespace, class, global variable和struct的声明，并在对应的cpp文件里面将它们给实现掉。

即是将声明和实现分开到了`.h`和`.cpp`文件里面

## include

`#include <xxx>`与`#include "xxx.h"`，都相当于是把头文件里的东西粘到了现有的代码里头。嗯，顾名思义，就是`include`的字面意思

比如说，我有一个`foo.h`和`foo.cpp`

``` cpp
// foo.h
namespace foo
{
    extern int x;
    extern const int kx;
}
// foo.cpp
include "Foo.h"

namespace foo
{
    extern int x = 9;
    extern const int kx = 114514;
}
```

那么用`g++ -E foo.cpp -o foo.ii`预编译一下`foo.cpp`，输出来的预编译文件`foo.ii`是这样的

``` cpp
# 1 "Foo.cpp"
# 1 "<built-in>"
# 1 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 1 "<command-line>" 2
# 1 "Foo.cpp"
# 1 "Foo.h" 1
       

namespace foo
{
 extern int x;
 extern const int kx;
}
# 2 "Foo.cpp" 2

namespace foo
{
 extern int x = 9;
 extern const int kx = 114514;
}
```
