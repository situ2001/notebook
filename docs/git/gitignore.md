# gitignore

[git-scm docs](https://git-scm.com/docs/gitignore)

用于忽略一些指定的untracked file

## Pattern

- separator(/)

只要分隔符/出现在开头或者(和)中间，就会出现相对目录的关系，是相对于本`.gitignore`文件的(前面/不/都没有问题的)

出现在最后的话，这个pattern仅能match到目录，而不能match同名的文件

- asterisk(*)

通配，match除了slash(/)之外的所有东东，也就是说只能match本层目录里的文件和文件夹

- token ?

match一个字符

- range

匹配一个在`[a-zA-z]`内的字符，有regex的味道了

- asterisk(**)

leading：表示每个目录里头match的东西比如`**/foo/bar`表示匹配每个目录里面的`foo/bar`

trailing: 表示在某目录里头所有的文件比如`bar/**`

center: 表示目录通配比如`foo/**/bar`，可以是`foo/114/514/bar`
