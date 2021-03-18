# 反射

在记笔记之前，先放置一段对**reflection**这个单词的解释吧。

> something that shows what something else is like, or that is a sign of a particular situation

我接触了一下java的反射，发现全称应该是对某一事物的反映。也可以说是Java自省，但是直接理解成光学上的反射，估计还是有比较大的偏差。

那么在java里，有这么一个神奇的类Class，它是在运行时动态加载的。比如，当JVM加载`String`类的时候，`String.class`就会被实例化为一个Class对象并加载进内存里。以后JVM新建String对象，执行String对象里头的method等，都能轻松实现。总的来说，一个Class对象里头有对应类的一切信息。

通过Class实例来获取类的信息，这个操作，就叫做反射啦。

既然一个Class里面有类的一切信息，那我是不是可以来读取Field啊，Method啊，Constructor啊。甚至还能得知继承关系？？为了证明是不是这样子，我做了一点小实验。

## 获取Field

对于这个的获取，首先是这么几个主要方法: `getField(String name)`, `getFields()`, `getDeclaredField(String name)`和`getDeclaredFields()`

前两个是用来获取指定的`Field`，而后者获取所有的并返回一个`Field[]`

比如我们可以通过这几个方法来读取一个class里面的field，不过要注意前两个方法不包含private，后面两个就包含除了父类之外的field。

而对于一个Field对象，我们还可以通过对应方法来获取它的名字和field的类型，甚至还能获取`Modifier`，以用来鉴定是public还是private等。甚至还能获取一个确切实例里面所有field的值。private当然也不例外，能读取，也能修改（由于modifier只是为了封装数据而已，实际上这些数据都可以通过反射来获取，不过不建议，会**破坏封装**）

上面的讨论都在下面的代码里头体现了。

``` java
package reflection;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Arrays;

public class Reflection {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        Class<?> clz = Bar.class;
        Field[] fields = clz.getFields();
        Arrays.stream(fields).forEach(System.out::println);
        System.out.println(clz.getDeclaredField("mValue"));
        System.out.println();

        Field field = clz.getDeclaredField("mValue");
        System.out.println(field.getName());
        System.out.println(field.getType());
        int modifier = field.getModifiers();
        System.out.println(Modifier.isPublic(modifier));
        System.out.println(Modifier.isProtected(modifier));
        System.out.println(Modifier.isPrivate(modifier));
        System.out.println(Modifier.isFinal(modifier));
        System.out.println();

        Bar bar = new Bar("114514");
        field.setAccessible(true);
        Object o = field.get(bar);
        System.out.println(o.toString());

        field.set(bar, "dssq");
        o = field.get(bar);
        System.out.println(o.toString());
    }
}

class Foo {
    public String key;
}

class Bar extends Foo {
    public int value;
    private String mValue;

    public Bar(String value) {
        this.mValue = value;
    }
}
```

输出结果

``` shell
public int reflection.Bar.value
public java.lang.String reflection.Foo.key
private java.lang.String reflection.Bar.mValue

mValue
class java.lang.String
false
false
true
false

114514
dssq
```

## 获取Method

档燃是可以获取Method的啦，同理Field，获取Method的方法大同小异，连方法名都是类似的。因此根据前者，照葫芦画瓢就完事啦。

反射获取的Method，也能获取其一切的一切信息。非常强大，比如。

``` java

```