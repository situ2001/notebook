# 做笔记

How to take notes with vuepress?

[[toc]]

## Markdown

这`个`*真**好***~~用~~

这是一种用于快速写formatted的文章的lightweight markup language

主要是要了解它的一些syntax之类的，我平时参考的是这个表格

``` markdown
### Heading

# H1

## H2

### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](image.jpg)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

` x3 + your language
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
` x3

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

然后详细的syntax介绍就是来自于这个网页了: [Markdown Guide](https://www.markdownguide.org/)

## LaTeX

$LaTeX$是一个用来写数学公式的typesetting system

所以怎么用的，在`markdown-it-katex`插件下，要遵循的语法是

1. Anything between two $ characters will be treated as TeX math.
2. The opening $ must have a non-space character immediately to its right, while the closing $ must have a non-space character immediately to its left, and must not be followed immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math.
3. If for some reason you need to enclose text in literal $ characters,backslash-escape them and they won’t be treated as math delimiters.

目前，我的符号的查询有两种途径，但是相比起来呢，后者似乎更全一些，因为logic notation这些运算符，我在Wiki那边倒是没有找到。

比较全面的是

[https://latex.wikia.org/wiki/List_of_LaTeX_symbols](https://latex.wikia.org/wiki/List_of_LaTeX_symbols)

还有一些

1. [https://en.wikipedia.org/wiki/Wikipedia:LaTeX_symbols](https://en.wikipedia.org/wiki/Wikipedia:LaTeX_symbols)
2. [https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)

---

### 速查表格

|符号|latex
|:-:|-
|$\sum_{i=0}^{m}$|`\sum_{i=0}^{m}`
|$\frac{114}{514}$|`\frac{114}{514}`
|$\bar{f}$|`\bar{f}`
|$\mathbb{E}$|`\mathbb{E}`
|$\int^{514}_{114}$|`\int^{514}_{114}`
|$\vec{x}$|`\vec{x}`
|$\Delta v$|`\Delta v`
|$\forall$|`\forall`
|$\exists$|`\exists`

---

## Markdown extension

### toc

`[[toc]]`可以直接得到目录

[[toc]]

### Github-Style Tables

``` markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Custom container

``` markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
