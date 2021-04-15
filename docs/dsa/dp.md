# Dynamic Programming

> Dynamic programming is the process of solving subproblems, then combining the solutions of the subproblems to obtain an overall solution.

Key idea: 把子问题解决后存下结果，并在后面其余子问题的解决时使用这些结果。以避免对overlap的子问题的反复计算

比如斐波拉契数列，可以用递归，也可以用DP

```java

```

又比如判断一个数是否为质数，除了一个一个暴力去找，也可以使用DP，利用之前存着的算出来的结果，来做后期的判断。

原理主要是，如果有一个数$i$，满足$i=pq$，其中$p\leq q$且$p$为质数，那么$i$就不是一个质数。这个$p$必须为质数，如果不是质数，那么就会有一个比$p$更小的质数满足条件（$p$不是质数的话，就可以被分解质因数）

```java
public class EfficientPrimeNumbers {
    public static void main(String[] args) {
        final int NUMBER_PER_LINE = 10;
        int current = 2;
        int squareRoot = 1;
        int count = 0;
        List<Integer> list = new ArrayList<>();

        int to;
        try (Scanner input = new Scanner(System.in)) {
            System.out.print("From 2 to ?: ");
            to = input.nextInt();
        }

        while (current <= to) {
            boolean isPrime = true;
            if (squareRoot * squareRoot < current) squareRoot++;

            for (int i = 0; i < list.size() && list.get(i) <= squareRoot; i++) {
                if (current % list.get(i) == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                list.add(current);
                count++;
                System.out.printf("%10d", current);
                if (count % NUMBER_PER_LINE == 0) {
                    System.out.println();
                }
            }

            current++;
        }

        System.out.println("\nThere are " + count + " prime number(s) in the range from 2 to " + to);
    }
}
```
