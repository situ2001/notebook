# 代码样例(C++)

收集一些代码示例，回忆起来会方便很多

## 运算符重载(特殊)

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

/* OUTPUT
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
*/
```

## Modern C++(部分)

存了一些可能会用到的新特性(不包含class那边的)

``` cpp
#include <iostream>
#include <vector>

int main()
{
    // keyword auto
    {
        auto v = std::vector<int>{ 1, 1, 4, 5, 1 };
        v.push_back(4);
        auto fn = [](auto v) -> void
        {
            for (auto e : v)
            {
                std::cout << e << " ";
            }
            std::cout << '\n';
        };
        fn(v);
    }

    // Lambda expression
    {
        int a = 0;
        auto fn = [&](int b) -> int // trailing return type
        {
            return a + b; // capture a's reference ([=] is copy)
        };
        std::cout << fn(114514) << '\n';
    }

    // decltype: declared type
    {
        auto fn = [](int x) { return x * x; };
        decltype(fn) fn1 = fn;
        std::cout << fn1(11) << '\n';
    }

    // std::move and rvalue reference
    {
        std::string str1 = "1919810";
        std::string str2 = std::move(str1);
        std::cout << str1 << "\n" << str2 << "\n";
        // what is rvalue reference
        // definition: Rvalue references can be used to extend the lifetimes of temporary objects
        int&& i = 1; // capture a temporary object, it will be destroyed when the stack is removed
        auto fn = [](int&& o) { return o + 1; };
        std::cout << fn(std::move(i)) << '\n';
    }

    // type_traits
    {
        // it can be used to compare two objects' type，
        using T = int; // type alias
        typedef std::int64_t U; // keyword typedef
        auto predicate = std::is_same<T, U>::value;
        std::cout << predicate << '\n';
    }

    // initializer list (or list initialization list)
    {
        auto l = { 114, 514, 191, 9810 };
        std::vector v(l); // can be used to initialize a vector
        for (auto e : l) // enhanced for loop
        {
            std::cout << e << '\n';
        }
    }
}
```