# Feature

[[toc]]

下面是一些我会用到的JDK1.8+的还不错的新特性

## Local Variable Inference

(Since Java10)局部变量类型推导

这个**不是关键字，不是关键字！**，他是一个类型，是类型！

现在自动类型推导在Java上也可以了！(香)

不过缺点是**在编译时被实际类型替换**(无伤大雅)

一个痛点得到了完美的解决，比如类型`Set<Map<K, V>.Entry<K, V>>`

```java
var map = new HashMap<String, Integer>();
var entrySet = map.entrySet(); // Set<Map<String, Integer>.Entry<String, Integer>>
```

但是这玩意不想C++的auto那么万能，有一些场景是用不了的

其实只需要注意到一个小小的本质：在**编译时**被实际类型替换，并且是**局部变量**

- 匿名λ expression

```java
var lambda = s -> System.out::println; // NOT OK! Can't infer the type of lambda
var lambda = new Consumer<String>() {
    @Override
    public void accept(String s) {
        System.out.println(s);
    }
}; // OK! Because the type of lambda is known
```

- 方法参数列表

```java
public void test(var foo) // not allowed
```

- 仅声明

```java
var x; // not allowed
```

- 赋个null

```java
var x = null; // not allowed
```

- try-catch block

你永远不知道在运行时前的编译时，你要catch的Exception是什么类型。

```java
try {

} catch (var e) // not allowed!
```

## Non-denoted Type

(Since Java10)这个跟接口和抽象类是不一样的。

> Java has a number of non-denotable types - that is to say types that can exist within your program, but for which there’s no way to explicitly write out the name for that type. A good example of a non-denotable type is an anonymous class - you can add fields and methods to it, but you won’t be able to write the name of the anonymous class in your Java code. The diamond operator can’t be used with anonymous classes. Var is less restricted and can be used to support some non-denotable types - specifically anonymous classes and intersection types.

在Java10里，我们可以基于一个存在的类，来创建一个新类，不过这个新类却没有相对应的新类型名字。这个就叫做`Non-denoted Type`，声明这种对象的时候必须要用`var`(因为根本没有存在的类型)，下面的代码用Object做declared type就会报错。

```java
public class Test {
    public static void main(String[] args) {
        var obj = new Object() {
            final String s = "114514";

            public String test() {
                return "From test(): " + s;
            }

            @Override
            public String toString() {
                return s;
            }
        };

        System.out.println(obj.test()); // From test(): 114514
    }
}
```

## Text block

(Since Java15)对于多行字符串，终于可以不用加号拼接字符串了

Python, YES!!!

```java
String example = """
        This is a 
        multi-line example.
        Wow, so python-liked(
        """;

System.out.println(example);

/** OUTPUT
This is a
multi-line example.
Wow, so python-liked(
*/
```

## record keyword

目前preview，要等未来的Java16(目前2021/03/21)

## enhanced switch

(Since Java14)见这里: [链接](https://openjdk.java.net/jeps/361)

`when` are you?(

可以当成赋值表达式用了，真香。所以赋值也好，return也好，都可以的。`->`后若是一个code block，那么就要用`yield`来说明返回值。

```java
public class Test {
    enum Foo {
        ONE, TWO, THREE, FOUR, FIVE
    }

    public static void main(String[] args) {
        var bar = Foo.ONE;
        String s = switch(bar) {
            case ONE, TWO   -> "case 1";
            case THREE      -> { var i = 0; yield "case 2"; }
            case FOUR, FIVE -> "case 3";
            default         -> {
                System.out.println("No case matched");
                yield "case 0";
            }
        };
    }
}
```

不过赋值时候，要注意全部情况，否则就会报错（不愧是严格的Java）

非赋值的switch，也是这样。主要是`:`to`->`, omit `break`。

## JShell

(Since Java9)很像动态语言如py的command prompt啊（

使用的话直接cmd输入即可

```shell
jshell
```

## instanceof

(Preview)待更...
