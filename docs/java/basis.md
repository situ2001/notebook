# 基础知识

## Method Overloading

(嘿呀这是最naive的)我一直以为是同名同返回类型不同参...

其实正确的是，只需要同名不同参。如下

- Both must have the same method name.
- Both must have different argument lists.

## Union Type

使用Bitwise-OR运算符，即`|`，一般是用于try-catch block里面的exception catching。比如我们从文件反序列化对象的时候，可能会同时出现两个exception: `IOException`和`ClassNotFoundException`，所以这个时候，Union Type就有用了。

就像是这样，下面是一个try-catch block

``` java
public class Test {
    public static void main(String[] args) {
        Object obj;
        
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("obj.dat"))) {
            obj = in.readObject();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

## Intersection Type

使用Bitwise-AND运算符，即`&`，可以用于generic中的wild card和对lambda表达式的casting

- 泛型

格式为`A & B`，A指的是类类型，而B是接口类型，比如`<T extends Object & Serializable>`。代码见下

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

## Enumerated Type

枚举类型(Enumerated Type)，这个我的教材没有详细讲，而是将这玩意放在了Appendix里头，那么按理来说就是比较好理解了。

例子如下，其实枚举类型的结构跟class也是差不多的，这玩意也是一个class哦(~~不就是把class改成enum吗，interface也是这样呢~~)，自带`name()`和`ordinate()`方法，又因为`extends Object implements Comparable`，所以有`compareTo()`和Object自带的方法。下面这个例子就啥都涉及到了，里面有data field, method和constructor。而枚举的元素这样写，相当于new一个实例罢了。

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
