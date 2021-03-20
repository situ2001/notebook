# Basis

[[toc]]

## Method Overloading

(嘿呀这是最naive的)我一直以为是同名同返回类型不同参...

其实正确的是，只需要同名不同参。如下

- Both must have the same method name.
- Both must have different argument lists.

## Varargs

当有一个方法不是很确定参数的个数的时候，就可以使用可变参数了，其实在Java里头，可变参数的实质就是一个长度可变的**数组**。syntax如下

``` java
public void foo(Object foo, String... bars)
```

比如说我们把可变参数里的元素全部print出来

``` java
import java.util.Arrays;

public class Example {
    private static void foo(String description, int... args) {
        System.out.println(Arrays.toString(args)); // [1, 9, 1, 9, 8, 1, 0]
        System.out.println("Description: " + description); // Description: dssq

        for (var e : args) {
            System.out.print(e);
        } // 1919810
    }

    public static void main(String[] args) {
        foo("dssq", 1, 9, 1, 9, 8, 1, 0);
    }
}
```

那么为什么不用数组做参数？区别请见下

``` java
foo(1, 9, 1, 9, 8, 1, 0);
foo(new int[]{1, 9, 1, 9, 8, 1, 0});
```

自带API里头的一个好例子，就是`String.format`这个方法啦

``` java
public static String format​(String format, Object... args)
// For example, invoke it with parameter("%s, %s", "foo", "bar")
```

## MethodHandle

> A method handle is a typed, directly executable reference to an underlying method, constructor, field, or similar low-level operation, with optional transformations of arguments or return values. These transformations are quite general, and include such patterns as conversion, insertion, deletion, and substitution.

``` java
public class Test {
    public static void main(String[] args) throws Throwable {
        MethodType methodType;
        MethodHandle methodHandle;
        MethodHandles.Lookup lookup = MethodHandles.lookup();
        methodType = MethodType.methodType(String.class, char.class, char.class);
        System.out.println(methodType); // (char,char)String
        methodHandle = lookup.findVirtual(String.class, "replace", methodType);

        String s = (String) methodHandle.invokeExact("hello", 'h', 'y');
        System.out.println(s); // yello
    }
}
```

从中可以知道，原来方法的签名是这样子的。

(待更)

## Union Type

使用Bitwise-OR运算符，即`|`，一般是用于try-catch block里面的exception catching。比如我们从文件反序列化对象的时候，可能会同时出现两个exception: `IOException`和`ClassNotFoundException`，所以这个时候，Union Type就有用了。

就像是这样，下面是一个try-catch block

``` java
public class Test {
    public static void main(String[] args) {
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("obj.dat"))) {
            Object obj = in.readObject();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

## Intersection Type

使用Bitwise-AND运算符，即`&`，可以用于generic中的wild card和对lambda表达式的casting，格式为`A & B`，A B指的是类或接口类型，比如`Object & Runnable`

- 泛型

比如`<T extends Object & Serializable>`。代码见下

``` java
public class Test {
    static class Foo {

    }

    interface Bar {

    }

    static class MyClass extends Foo implements Bar {

    }


    private static <T extends Foo & Bar> void test(T t) {

    }

    public static void main(String[] args) {
        test(new MyClass());
    }
}
```

- Lambda casting

可以直接把Lambda表达式的类型给cast一下，可以得到有实现了一个接口的匿名类的这么一个效果

``` java
public class Test {
    public static void main(String[] args) {
        Runnable task = (Runnable & Serializable) () -> System.out.println("Test");
        Class<?> clz = task.getClass();
        for (var e : clz.getInterfaces()) {
            System.out.println(e);
        }
    }
}

/** OUTPUT
interface java.lang.Runnable
interface java.io.Serializable
*/
```

## Enums

枚举类型(Enumerated Type)，代码结构跟class是差不多的，这玩意也是一个class，其实就是把class关键字改成enum而已。

自带`name()`和`ordinate()`，且`extends Object implements Comparable`，所以有`compareTo()`和Object自带的方法

枚举类里面的元素，可以看成是一个已经实例化了的该类型的constant。带参就`ELEMENT(param)`不带就`ELEMENT`

``` java
package appendixH;

public enum TrafficLight {
    RED("Please stop"), GREEN("Please go"),
    YELLOW("Please caution");

    private final String description;

    private TrafficLight(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}

class TestTrafficLight {
    public static void main(String[] args) {
        TrafficLight light = TrafficLight.GREEN;
        System.out.println(light.getDescription());
        System.out.println(light.name());
        System.out.println(light.ordinal());
    }
}
```
