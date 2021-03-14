# Naming rules

A good repo: [StyleGuide](https://github.com/google/styleguide)

## Generic

> Use names that describe the purpose or intent of the object. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Minimize the use of abbreviations that would likely be unknown to someone outside your project (especially acronyms and initialisms). Do not abbreviate by deleting letters within a word. As a rule of thumb, an abbreviation is probably OK if it's listed in Wikipedia. Generally speaking, descriptiveness should be proportional to the name's scope of visibility. For example, n may be a fine name within a 5-line function, but within the scope of a class, it's likely too vague.

总之就是说，不要为了节省字母而节省字母，一个好的命名要做到**describe the purpose or intent of the object**即是描述好对象的**意图**。适度的缩写(abbreviation)可以，但是这个缩写是要人人皆知的，比如可以在Google或维基百科上面找到。

## Rules

### Header file

空格可以使用dash(-)或者underscore(_)代替，也可以直接忽略空格和横杠和下划线，比如这些都是合法的。但要注意不要与`/usr/include`里面的重名。

- `my_useful_class.cc`
- `my-useful-class.cc`
- `myusefulclass.cc`
- `myusefulclass_test.cc // _unittest and _regtest are deprecated.`

### Type name

这个规则适用于class, enum, struct, type alias, type template parameter ：每个单词的首字母都要大写，不要加下划线或横杠。

``` cpp
// classes and structs
class UrlTable { ...
class UrlTableTester { ...
struct UrlTableProperties { ...

// typedefs
typedef hash_map<UrlTableProperties *, std::string> PropertiesMap;

// using aliases
using PropertiesMap = hash_map<UrlTableProperties *, std::string>;

// enums
enum class UrlTableError { ...
```

### Function name

同class的命名规则

``` cpp
AddTableEntry()
DeleteUrl()
OpenFileOrDie()
```

### Const and Enumerate

用k开头，并且命名方式是驼峰命名法

``` cpp
const int kDaysInAWeek = 7;
const int kAndroid8_0_0 = 24;  // Android 8.0.0
```

### non-member variable and struct variable

全部小写，空格用下划线代替

``` cpp
std::string table_name;  // OK - lowercase with underscore.
std::string tableName;   // Bad - mixed case.
```

### Member variable

与非成员变量一样的，只不过是在trailing位加一个underscore

``` cpp
class TableInfo {
  ...
 private:
  std::string table_name_;  // OK - underscore at end.
  static Pool<TableInfo>* pool_;  // OK.
};
```
