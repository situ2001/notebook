# Reflection

> Something that shows what something else is like, or that is a sign of a particular situation

在java里，有这么一个神奇的Class类，它是在运行时动态加载的。

比如，当JVM加载`String`类的时候，`String.class`就会被实例化为一个`Class`对象并加载进内存里。以后JVM新建String对象，执行String对象里头的method等，都从这个对象里头读。

总的来说，一个Class对象里头有对应类的一切信息。通过Class实例来获取类的信息，这个操作，就叫做反射。

## Get Field

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
        System.out.println("It is a " + Modifier.toString(modifier) + " field");
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
It is a private field

114514
dssq
```

## Get Method

也可以获取Method的，同理Field，获取Method的方法大同小异，连方法名都是类似的。

反射获取的Method，也能获取其一切的一切信息。非常强大，

> `Interface Function<T,​R>`
>
> `default <V> Function<T,​V> andThen​(Function<? super R,​? extends V> after)`

比如我们获取`Function`下的`andThen`的一些信息，并且invoke它。

``` java
public class Reflection {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Function<Integer, Integer> f = x -> x * x;
        Class<?> klass = Function.class;

        var typeParameter = klass.getTypeParameters();
        System.out.println("Class type parameters: " + Arrays.toString(typeParameter)); // get class generic type parameters

        var method = klass.getMethod("andThen", Function.class); // get method
        var name = "Method name: " + method.getName();
        System.out.println(name);

        var modifier = method.getModifiers();
        System.out.println("It is a " + Modifier.toString(modifier) + " method");

        System.out.print("Parameter of the method: ");
        Arrays.stream(method.getParameters()).forEach(parameter -> System.out.print(parameter.toString() + " ")); // get parameters' name
        System.out.println();

        System.out.print("Type parameter of the method: ");
        Arrays.stream(method.getTypeParameters()).forEach(methodTypeVariable -> System.out.print(methodTypeVariable.getName() +" "));
        System.out.println();

        System.out.println("Returning: " + method.getGenericReturnType().getTypeName());

        var composedFunction = method.invoke(f, f); // get a composed function
        var result = ((Function<Integer, Integer>) composedFunction).apply(2);
        System.out.println("Result: " + result);
    }
}
```

输出

``` shell
Class type parameters: [T, R]
Method name: andThen
It is a public method
Parameter of the method: java.util.function.Function<? super R, ? extends V> arg0 
Type parameter of the method: V 
Returning: java.util.function.Function<T, V>
Result: 16
```

## Object instantiation

同理，像获取Method一样获取Constructor，并可以进行调用来new一个对象。

``` java
public class Reflection {
    public static void main(String[] args) throws IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
        Class<?> klass = Foo.class;
        var foo = klass.getDeclaredConstructor().newInstance();
        var privateConstructor = klass.getDeclaredConstructor(String[].class);
        privateConstructor.setAccessible(true);
        privateConstructor.newInstance((Object) new String[]{"114", "514"});
    }
}

class Foo {
    Foo() {
        System.out.println("Non-arg constructor");
    }

    private Foo(String... args) {
        System.out.print("Private constructor with args: ");
        Arrays.stream(args).forEach(arg -> System.out.print(arg + " "));
    }
}
```

输出

``` java
Non-arg constructor
Private constructor with args: 114 514
```

## 动态代理

待更...