# Problems(C/C++)

[[toc]]

## static keyword

How does the keyword static works?

其实一般就是用来遮掩隐藏的，因为用了static关键字的变量，它的作用域就不再是全局了，即使他被存于全局变量区域。然后另外一个就是静态地躺在了全局变量区里头，只被初始化一次。

## define vs typedef vs using

如果都是用来做type alias的话，就是这样（不过define还是别滥用

``` cpp
#define T std::int64_t
using T = std::int64_t;
typedef std::int64_t T;
```

typedef 为什么顺序有点不一样呢，可以直接想想C风格的struct

``` c
typedef struct 
{
    int foo;
    int bar;
} S;
```

## extern keyword

来自[SO问题](https://stackoverflow.com/questions/1433204/how-do-i-use-extern-to-share-variables-between-source-files)

> A best way to declare and define global variables

摘自原文的答案部分

The header is included by the one source file that defines the variable and by all the source files that reference the variable. For each program, one source file (and only one source file) defines the variable. Similarly, one header file (and only one header file) should declare the variable. The header file is crucial; it enables cross-checking between independent TUs (translation units — think source files) and ensures consistency.

- file3.h

``` c
extern int global_variable;  /* Declaration of the variable */
```

- file1.c

``` c
#include "file3.h"  /* Declaration made available here */
#include "prog1.h"  /* Function declarations */

/* Variable defined here */
int global_variable = 37;    /* Definition checked against declaration */

int increment(void) { return global_variable++; }
```

- file2.c

``` c
#include "file3.h"
#include "prog1.h"
#include <stdio.h>

void use_it(void)
{
    printf("Global variable: %d\n", global_variable++);
}
```

一些源码，electron里面的`electron_constants.cc`与`electron_constants.h`

``` cpp
// electron_constants.h
namespace electron {
    // The app-command in NativeWindow.
    extern const char kBrowserForward[];
    extern const char kBrowserBackward[];
    // ...
}

// electron_constants.cc
#include "shell/common/electron_constants.h"

namespace electron {
    const char kBrowserForward[] = "browser-forward";
    const char kBrowserBackward[] = "browser-backward";
    // ...
}
```

## 只能重载为成员函数的运算符

答案来源: [StackOverflow](https://stackoverflow.com/questions/1132600/why-can-some-operators-only-be-overloaded-as-member-functions-other-as-friend-f)

摘抄原文如下，可能是为了一些情况的考虑，所以就禁止重载为非成员函数

> 1. The assignment `operator=()`. Allowing non-member assignments seems to open the door for operators hijacking assignments, e.g., by overloading for different versions of const qualifications. Given that assignment operators are rather fundamental that seems to be undesirable.
>
> 2. The function call `operator()()`. The function call and overloading rules are sufficiently complicated as is. It seems ill-advised to complicate the rules further by allowing non-member function call operators.
>
> 3. The subscript `operator[]()`. Using interesting index types it seems that could interfere with accesses to operators. Although there is little danger of hijacking overloads, there doesn't seem to be much gain but interesting potential to write highly non-obvious code.
>
> 4. The class member access `operator->()`. Off-hand I can't see any bad abuse of overloading this operator a non-member. On the other hand, I also can't see any. Also, the class member access operator has rather special rules and playing with potential overloads interfering with these seems an unnecessary complication.

## Pointer to function

``` cpp
void test()
{
    std::cout << "This is function test" << '\n';
}

// main
typedef void (*f)(void);
f fn = test;
// or
void (*func)(void) = test;
fn(); // This is function test
```

注意使用括号改变优先级...不然`void* f(void)`就是一个返回`void*`类型的函数了。来点茴香豆吧（

`int (*a[])()` is a array of function pointer of the prototype int func()

`int (*f())[]` is a function that returns a pointer to array

但不允许有**array of function**

来个复杂的，其实无非就是标识符被定义成了指针、数组、还是函数而已。

`int* const * (*f)(double)`中，f是一个指向一个返回指向只读int*的指针的函数的指针，其实英语解释起来不是很拗口。

a function pointer that points to a function with prototype `int* const * func(double)` where its returning value is a pointer points to a read-only pointer-to-int
