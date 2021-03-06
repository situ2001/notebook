# 机器学习与大数据

这是一门选修课

## 模型选择

比如我们训练树叶识别的模型

过拟合：训练样本调为都有锯齿，把无锯齿的新样本扔进来，就会认为不是树叶（它误认为树叶是都有锯齿的）

欠拟合：训练样本调为绿色，扔新样本(树)，就把树当成树叶（认为绿色的都是）

---

模型选择的三个关键问题

1. 如何获得测试结果 -> 评估方法
2. 如果评估性能优劣 -> 性能度量
3. 如何判断实质差别 -> 比较检验

### 评估方法

Q: 如何获得数据集(dataset)

> 测试集可以由一些比较出名的benchmark里头翻出来找到，也可以是自己制作的数据。测试集应该要与训练集“互斥”，方法有
>
> 1. 留出法(hold-out)
> 2. 交叉验证法(cross validation)
> 3. 自助法(bootstrap)

- 留出法

就是在数据集中，留出了一小部分用于存放测试集($\approx1/5 - 1/3$)，要注意重复随机划分，要保持数据分布的一致性

- k-折交叉验证法

就是把数据集以一定比例分开为测试集与训练集，并且每一次训练和测试都交换一下其中一部分测试集与训练集的顺序。

```shell
Data1-9 (Training) + Data10 (Testing) => result1
Data1-8 Data10 + Data9 => result2
...
... => result n
returning result = avg(result1, ..., result n)
```

- 自助法

这个数据的采样是可放回、可重复的采样。数据分布是有所改变的，训练集与原样本集同规模。

可以这么理解，你盲盒抽奖，抽到啥就放啥到新的数据集里，其中同一个物品，是有可能被多次抽到的。

包外估计(out-of-bag estimation)

$${\lim_{x\to \infty}}(1-m)^m=\frac{1}{e}\approx 0.368$$

- 调参
  
算法的参数：人工设定，也称之为超参数。模型的参数：一般是由学习设定。

算法模型的参数修改确定之后，要用训练集和验证集来重新训练模型。

涉及到：参数空间

### 性能度量

(performance measure)这是衡量模型泛化能力的评价标准，反映了任务需求

回归(regression)任务常用均方误差

$$E(f:D)=\frac{1}{m}\sum_{i=1}^{m}(f(x_{i})-y_{i}))^2$$

- 错误率与精度

$$E(f;D)=\frac{1}{m}\sum_{i=1}^{m}\prod (f(x_{i})\neq y_{i})$$

$$acc(f;D)=\frac{1}{m}\sum_{i=1}^{m}\prod (f(x_{i})\neq y_{i})$$

---

- 查准率与查全率

英语：查准率(Precision)与查全率(Recall)

|预测(prediction)(右)<br>真实(label)(下)|正|反
|:--:|:--:|:--:
|正|TP|FN
|反|FP|TN

Precision -- 由输入为起点，看机器对dataset的判断，到底有多少是正确的

查准率=$\frac{TP}{TP+FP}$

Recall -- 由结果为起点，看dataset里头到底有多少label为真的样例被挑选了出来

查全率=$\frac{TP}{TP+FN}$

---

- PR图与BEP

PR全称为Precision-Recall

这图就是一个二维坐标系，y轴为查准率(Precision)，x为查全率(Recall)，对一个学习器的预测结果进行多次测量之后得出的曲线。其中BEP就是平衡点，基于的是`查准率=查全率`的一条曲线

- F1
  
平时我们用的比BEP更多的就是F1度量了，有一个公式是这样的，它可以表示对查全率与查准率的不同偏好

$$F_{\beta}=\frac{(1+\beta ^2) *P*R}{(\beta ^2 *P)+R}$$

其中$\beta >1$，查全率有更大影响，反之

- 宏微指标

宏(macro-)与微(micro-)，应该是指的宏观微观吧，一个是求全部的，一个是对一个一个地求

- ROC 与 AUC

AUC: Area Under the ROC(Receiver Operating Characteristic) Curve

- 非均等代价

犯下不同的错误往往会造成不同的损失。此时就需要考虑非均等代价了(unequal cost)，与此还有代价敏感(cost-sensitive)公式

TODO

### 比较检验

机器学习 => 概率近似准确

统计假设检验为学习器性能比较提供了重要依据

FriedMan检验图

---

### 误差

在此之前先放一个表格

|sign|meaning
|:--:|--
|$x$|测试样本
|$D$|数据集
|$y_{D}$|x在数据集中的标记
|$y$|x的真实标记
|$f$|用训练集$D$训练得到的模型
|$f(x;D)$|由$D$训练得到的模型$f$对$x$的输出
|$\bar{f}(x)$|由模型$f$对$x$的期望预测输出

偏差-方差分解(bias-variance decomposition)

$$E(f:D)={bias}^{2}(x)+var(x)+\epsilon ^2$$

其中

${bias}^{2}(x)$ - 期望输出与真实输出的差别(算法本身的拟合能力)

$${bias}^{2}=(\bar{f}(x)-y)^2$$

$var(x)$ - 同样大小的训练集的变动所导致的性能变化(数据的扰动)

$$var(x)=\mathbb{E}_{D}[(f(x;D)-\bar{f}(x))^{2}]$$

$\epsilon^2$ - (噪声)当前任务上任何学习算法所能达到的期望泛化误差的下界(学习问题本身的难度)

$$\epsilon^{2}=\mathbb{E}_{D}[(y_{D}-y)^2]$$

这就是泛化误差了，泛化性能是由学习算法的能力、数据的充分性以及学习任务本身的难度共同决定

同时也提到了: 偏差-方差窘境(bias-variance dilemma)，即训练的强度不同，泛化误差就会出现不同参数的主导阶段，就是偏差主导和方差主导。

---

## 模型

### 线性模型

Linear model尝试学得一个通过属性的线性组合(如下公式)来进行预测的函数，把分散的东西尝试拟合都一条线性的直线上面去

$$f(x)=\omega_{1}x_{1}+\omega_{2}x_{2}+...+\omega_{d}x_{d}+b$$

可以用矩阵简化表示

$$y=\omega^{T}x$$

x是输入，f是输出的预测？

### 线性回归

- 目标函数

我们要找到问题，并为此建立合适的目标函数

这个函数的$\omega$和b值的变化，就会使得这个函数旋转、平移变换，使得这个目标函数往分散的数据拟合

$$f(x_{i})=\omega x_{i}+b$$

$$(w^{*},b^{*})=arg min_{(w,b)}\sum^{m}_{i=1}(f(x_{i})-y_{i})^2$$

得到

$$(w^{*},b^{*})=arg min_{(w,b)}\sum^{m}_{i=1}(y_{i}-\omega x_{i}-b)^2$$

$$E_{(\omega, b)}=\sum^{m}_{i=1}(y_{i}-\omega x_{i}-b)^2$$

对上式进行最小二乘参数估计（令均方误差最小化）

### 多元线性回归

从这里，区别就是$f(x)$中的一元量$x_{i}$变为了多维向量$\vec{x_{i}}$

$\omega$也变成矩阵了，也就是说通过矩阵变换，把$\vec{x}$所在的空间转换到了新的空间上的$\vec{y}$

- 最小二乘法与矩阵求导

TODO 记录一下矩阵求导的知识

### 二分类任务

### 对率回归

这是一个分类学习的算法

什么是对数几率?一个方程，其中$\frac{y}{1-y}$是几率，反映了x作为正例的相对可能性

$$ln\frac{y}{1-y}=\omega^{T}x+b$$

可以写为

$$ln\frac{p(y=1|x)}{p(y=0|x)}=\omega^{T}x+b$$

### 极大似然法

Maximum likelihood method

### 线性判别分析

> 用低维空间的尺子来测量高维空间的数据

Linear Discriminant Analysis(LDA)

将样例，投影到一条直线，即低维空间。称为一种"监督降维"技术。比如高维样本投到一条直线（关键就是找这条直线）$y=\omega^{T}x$上面的点来（将矩阵变为标量），其中$\omega$可变。

要使得同样例的投影点尽可能近，异类例的投影尽可能远。

- 协方差

某个样本到中心的距离，类比二维三维点坐标的距离

$$(\vec{x}-\vec{u})^T(\vec{x}-\vec{u})$$

### 多分类问题

思路就是拆成了多个二分类
