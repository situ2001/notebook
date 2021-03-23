# 鸭子类型

一语言要实现多态，方法不仅只有一种，这里主要介绍一下动态语言所用的Ducking Type

## What it is

什么是鸭子类型(Ducking type)呢？

这是一种多态的实现方式，在**弱类型**的动态语言中经常出现，比如python/javascript甚至是golang都有。

有一个idiom，叫做

> If it looks like a duck and quacks like a duck, it's a duck.

也就是说，一个东西看起来像鸭子，叫起来也像鸭子，那么它就是一只鸭子。

那么，一个对象看起来是鸭子，行为也很像鸭子，那么它这个对象就是一只鸭子。即

> Duck Typing means that an object is defined by what it can do, not by what it is.

因此我们关心的不是对象的类型，而是这个对象到底是什么，它能做什么。

举个例子

``` python
class Animal:
    def who(self):
        print ('I am a generic animal')

class Duck(Animal):
    def who(self):
        print ('I am a duck')

class Cat(Animal):
    def who(self):
        print ('I am a cat')

class Dog(Animal):
    def who(self):
        print ('I am a dog')

def identify(obj):
    obj.who()

duck = Duck()
cat = Cat()
dog = Dog()

identify(duck)
identify(cat)
identify(dog)
```

输出结果是

``` shell
I am a duck
I am a cat
I am a dog
```

而如果我们写

``` python
identify('animal')
```

就会得到错误

``` shell
Traceback (most recent call last):
  File "c:/Users/situ/codes/python/test1.py", line 28, in <module>
    identify('animal')
  File "c:/Users/situ/codes/python/test1.py", line 18, in identify
    obj.who()
AttributeError: 'str' object has no attribute 'who'
```

那么看起来就是根据`property`/`attribute`来调用相对应的方法，这就保证了鸭子就是鸭子，猫就是猫，狗就是狗。动态语言就是由此实现了多态。

## 静态语言

一些静态语言，比如Java/C++就不是这样子实现的了，它们的class有很强的等级制度。比如

``` java
class Test {
    class Animal {
        public abstract void who();
    }

    class Duck extends Animal {
    public void who() {
        System.out.println("I am a duck");
    }

    public static void identify(Object obj) {
        obj.who();
    }

    public static void main(String[] args) {
        Duck duck = new Duck();
        identity(duck);
    }
}
```

这上面的是错误的，因为此时传进去的duck，其declared type就是Object，而Object并没有who()这个方法，因此在identify()中，可以这样做。

``` java
if (obj instanceof Animal) {
    ((Animal)obj).who();
}
```

或者

``` java
public static void identify(Animal animal) {
    animal.who();
}
```

这就是许多静态语言实现多态的方式。
