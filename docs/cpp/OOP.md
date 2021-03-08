# 快手上手C++面向对象（发了博客）

(个人笔记) 要不是大一下学校的OOP课要讲MFC...

<!-- more -->

基于java中的OOP来学习C++的OOP（可 迁 移 学 习）（爆炸预定

感觉C++中的OOP多了好多东西啊（太菜了

## 运算符和keyword

按优先级来说的。

scope qualifier: `::`，很直白，翻译过来就叫做作用域限定符

member access: `.`和`->`常见，前者是非指针变量用过的，后者是指针变量用的

class上的`:`，如同java里的`extends`

## member function

这个其实怎么说呢，我就把它跟java里头的instance method混为一谈了。所以这样理解就没问题了。

## 实例化一个对象

无参数的话，**不用带parentheses**...(被坑过)，如下面的第一行...

``` cpp
Test test1;

Test* test2 = new Test;
```

前者开在stack上，后者开在heap上。（java直接扔heap上不香吗

## 虚函数

函数就有非虚函数，虚函数和纯虚函数这三种了，太草了。由于java的对象方法默认就是`virtual`的（JVM调用指令`invokevirtual`），然后java可以多态，要invoke的方法都是在runtime进行动态绑定的。所以C++里头的函数虚不虚，就很好理解了。

比如java里头定义一个父类抽象方法的话，子类来实现。

``` java
//father
public abstract void test();
//son
@Override
public void test() {
  /** do sth */
}
```

C++就要用到纯虚函数了

``` cpp
//father
virtual void test() = 0;
//son
virtual void test()
{
  /** do sth */
}
```

如果父类的虚函数想有自己的实现的话，把`= 0`去掉，加自己的实现即可。

那函数虚不虚有什么关系呢？比如这段

``` cpp
class Animal
{
    public:
    virtual void eat()
    {
        std::cout << "I am eating food." << std::endl;
    }
};

class Chicken : public Animal
{
    public:
    virtual void eat()
    {
        std::cout << "I am eating hay" << std::endl;
    }
};
```

带了`virtual`关键字的话就是这样的

``` cpp
Animal* a = new Chicken;
a->eat(); // I am eating hay
```

而没有`virtual`关键字的话就是这样的

``` cpp
Animal* a = new Chicken;
a->eat(); // I am eating food
```

就是相当于没有了多态特性而已。（个人理解）

不过这能做到jvav做不到的东西，挺厉害的嘛（

## override 关键字

这个东西(C++11)似乎可以防止写虚函数重载的时候，不小心写错的大无语事件发生。用法如下

``` cpp
virtual void eat() override;
```

## modifier

似乎因为没有jvav的package，所以这么几个modifier**都没有了package access的restriction**（因为根本没有package啊）。所以就很方便了。

`public`类的外部都能访问。

`protected`**自己和派生类**能访问。(！大不同！)

`private`直接是私有，类里的能访问。

## static

这个也没啥大区别的，唯一的小区别就是访问static的方法或变量需要使用operator `::`

``` cpp
//class Test
public:
  static int i = 114514;

//main
Test::i // 114514
```

## 关于继承

就这样

``` cpp
class Chicken : public Animal
```

继承的话，要注意，C++继承的class默认是private的，所以要加个`public`，否则外部无法使用父类的方法。（草）

指定父类使用哪一个constructor可不像java那样在子类的constructor里搞，要这样（不就移到了外面来？

``` cpp
public:
  Chicken() : Animal(arg)
  {
    /** do sth */
  }
```

相似地，我们也可以用来给field初始化，如

``` cpp
private:
  std::string text = nullptr;
public:
  Foo() : text("114514")
  {
    /** do sth */
  }
```

经查询，这个东西叫做`Constructors and member initializer lists`

## friend

然后就是友元了，友元可以直接访问class里头的private field，它不是一个成员函数也不是一个这个class的static函数。作用域不一样的。这东西有这个特性，岂不是可以少一堆getter和setter？（

``` cpp
class Test
{
public:
  friend void getNum(Test test)
  {
    std::cout << test.num << std::endl;
  }
private:
  int num = 114514;
};
```

``` cpp
Test test;
getNum(test); // 114514
```

当然也可以在里头声明一个友元类，此时友元类里的成员函数都能访问到这个类的private field

``` cpp
//In class Test
friend class Friend;

//Friend
class Friend
{
  /** ... */
  /** have the access to private field of Test */
}
```

这个东西的中文怪怪的，以friend来了解可能会更好。

## 多继承

应该用不到，不写了。

## constructor和destructor

常见，语法也是差不多，但是后者析构这个就没见过了（GC擦屁股太香了

类的析构和构造，都是默认缺省的（无参数），这点都一样，当然也可以自己写实现

``` cpp
//class Test
~Test()
{
  std::cout << "instance deleted";
}
```

方法命名就这，直接是constructor前加 `~`

## Copy Constructor

然后就是这个了，同上，这个东西也是默认缺省的，它的原型像是这样的

``` cpp
Test::Test(const Point&)
```

本来java中的引用变量赋值就是把reference to给你而已。但是C++直接给你搞了新的对象。

``` cpp
//main
Test test;
Test test1 = test; //invoke Copy Constructor
```

就像是java中`Cloneable`对象的`clone()`方法一样，深拷贝浅拷贝这些也是差不多的，要在拷贝构造函数那里写自己的实现。

## Move Constructor

C++11开始加入了rvalue reference，这是什么呢，一查cpprefernce就能看到短小精悍的解释

> Rvalue references can be used to extend the lifetimes of temporary objects

还有std::move，类的构造器也有了移动构造函数

``` cpp
//class Foo
public:
  Foo(Foo&& bar); 
```

初始化并赋值一个新对象的时候，可以使用Move constructor

``` cpp
Foo foo1;
Foo foo2 = std::move(foo1);
```

## pointer this

跟java一样，C++只有成员函数才有的。记得member access要用operator `->`

## pointer to an object

这个java的引用变量是差不多的。声明也就这样

``` cpp
ClassType* pointer;
```

用法也就那样，如

``` cpp
Test test1;
Test* pointer = &test1;

Test* test2 = new Test;
```

## 函数定义位置

定义在类里头就是默认inline了。如下引用来自cpluscplus.com

> The only difference between defining a class member function completely within its class or to include only the prototype and later its definition, is that in the first case the function will automatically be considered an inline member function by the compiler, while in the second it will be a normal (not-inline) class member function, which in fact supposes no difference in behavior

## delete AND default

如果有带参的constructor，那么可以用`=default`来写默认constructor如`Test(){}`，如果要禁用某个函数，可以上`=delete`

``` cpp
Test() = default;
Test(const X&) = delete;
Test& operator=(const X&) = delete;

//main
Test test;
Test test1 = test; //wrong!
Test test2;
test2 = test3; //wrong!
```

## 运算符重载

直接扔cppreference算了: [直达](https://en.cppreference.com/w/cpp/language/operators)

其实返回值赋给谁的这个问题，我想了想，估计可以直接与基本类型的运算挂钩。

总的来说，跟声明一个non-member function和一个member function差不多。但是有一些略微不同的地方，先在这里用一段代码记下来，之后回查就简单多了。

``` cpp
#include <iostream>

struct Foo
{
    int value;

    // operator +
    Foo operator+(const Foo& b)
    {
        std::cout << "+ was called" << std::endl;
        return Foo{ this->value + b.value };
    }

    // assignment operator
    Foo& operator=(const Foo& other)
    {
        std::cout << "operator = was called";
        this->value = other.value;
        return *this;
    }

    // postfix ++, note that the int value dose nothing here
    Foo operator++(int)
    {
        Foo old = *this;
        operator++();
        std::cout << "foo++ was called" << std::endl;
        return old;
    }

    // prefix ++
    Foo& operator++()
    {
        this->value += 1;
        // do some increment operation here
        std::cout << "++foo was called" << std::endl;
        return *this;
    }

    // also the += operator
    Foo& operator+=(const Foo& rhs)
    {
        this->value += rhs.value;
        // addition of rhs to *this takes place here
        std::cout << "+= operator was called" << std::endl;
        return *this;
    }
};

// Since << and >> take user-defined type as the right argument (b in a@b), they must be implemented as non-member
std::ostream& operator<<(std::ostream& os, Foo foo)
{
    std::cout << foo.value;
    return os;
}

// a non-member operator > function
bool operator>(const Foo& lhs, const Foo& rhs)
{
    return lhs.value > rhs.value;
}

int main()
{
    Foo foo = { 114 };
    Foo bar = { 514 };

    Foo test1 = foo + bar;
    std::cout << test1 << std::endl;

    Foo test2;
    test2 = foo;
    std::cout << test2 << std::endl;

    std::cout << (foo++) << std::endl;
    std::cout << (++foo) << std::endl;

    foo += bar;
    std::cout << foo << std::endl;

    std::cout << (foo > bar) << std::endl;
}

```

输出结果

``` shell
+ was called
628
operator = was called114
++foo was called
foo++ was called
114
++foo was called
116
+= operator was called
630
1
```

## const keyword

草了，竟然还有啊...不愧是C++...

一般来说呢，`const`是作用于它左边的（如果左边啥都没有的话）。而这个关键字`const`能作用于变量、函数、类对象...

不过**关键**是有`const`的东西，它不能修改里面成员的内存空间。

变量加const就很简单，就不用说了。

如果有`Foo const foo;`，那么这个对象变量（或指针）就不能访问非const方法，也不能修改成员了

如果有一个const方法，那么在这个方法体内，不能访问非const方法，也不能修改成员变量。（实质在后面说了）

而我查了cppreference，里面这样说

> const object - an object whose type is const-qualified, or a non-mutable subobject of a const object. Such object cannot be modified: attempt to do so directly is a compile-time error, and attempt to do so indirectly (e.g., by modifying the const object through a reference or pointer to non-const type) results in undefined behavior.

并且const了的函数实质又是？是这样的，其实就是把这个函数里头的`*this`给const掉了。

> In the body of a cv-qualified function, *this is cv-qualified, e.g. in a const member function, only other const member functions may be called normally. (A non-const member function may still be called if const_cast is applied or through an access path that does not involve this.)

## 示例

施工中...
