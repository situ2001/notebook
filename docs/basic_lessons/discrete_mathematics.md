# 离散数学

这里主要是一些离散数学的笔记

## 命题逻辑

### 命题与联结词

- 命题

一个陈述句，可以确定真假(与之相反的就是谬误了)。

- 联结词

与命题相结合，就是用来修改命题的内容的。比如

> $P$: 上海是一个大城市
>
> $\lnot P$: 上海并不是一个大城市

|联结词|英文|符号
|:-:|:-:|:-:
|否定|Negation|$\lnot$
|合取|Conjunction|$\land$
|析取|Disjunction|$\lor$
|条件|Condition|$\rightarrow$
|双条件|If and only if|$\leftrightarrows$

怎么记之间的逻辑关系呢？

程序语言...否定就是NOT，合取就是AND，析取就是OR，剩下两个就看真值表

条件是善意的前提，P不行，Q也可能行（想一下$P\Rightarrow Q$)，双条件就是要一起，才会真，不然就是假

|P|Q|P$\rightarrow$Q|P$\leftrightarrows$Q
|:-:|:-:|:-:|:-:
T|T|T|T
T|F|F|F
F|T|T|F
F|F|T|T

## 命题公式

像这样子的

1. $\lnot (P\land Q)$
2. $(((P\to Q)\land (Q\to R))\leftrightarrows (S\leftrightarrows T))$

## 命题定律

这个表可谓是非常重要的了，比如其中的德摩根律

|命题定律|表达式
|--|--
|对合律|$\lnot \lnot P\Leftrightarrow P$
|幂等律|$P\lor P\Leftrightarrow P, P\land P\Leftrightarrow P$
|结合律|$(P\lor Q)\lor R\Leftrightarrow P\lor (Q\lor R)$<br>$(P\land Q)\land R\Leftrightarrow P\land (Q\land R)$
|交换律|$P\lor Q\Leftrightarrow Q\lor\ P$<br>$P\land Q\Leftrightarrow Q\land\ P$
|分配律|$P\lor(Q\land R)\Leftrightarrow(P\lor Q)\land(P\lor R)$<br>$R\land(Q\lor R)\Leftrightarrow (P\land Q)\lor(P\land R)$
|吸收律|$P\lor (P\land Q)\Leftrightarrow P$<br>$P\land (P\lor Q)\Leftrightarrow P$
|德摩根律|$\lnot(P\land Q)\Leftrightarrow \lnot P \lor \lnot Q$<br>$\lnot(P\lor Q)\Leftrightarrow \lnot P \land \lnot Q$
|同一律|$P\lor F\Leftrightarrow P, P\land T\Leftrightarrow P$
|零律|$P\lor T\Leftrightarrow T, P\land F\Leftrightarrow F$
|否定律|$P\lor \lnot Q\Leftrightarrow T, P\land \lnot Q\Leftrightarrow F$

哦，还有这个重要的$(P\to Q)\Leftrightarrow \lnot P\lor Q$
