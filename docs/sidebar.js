let get = (dir, items) => {
    for (e in items) {
        items[e] = dir + '/' + items[e] + '.md';
    }
    return items;
};

module.exports = [
    {
        title: '工具',
        children: get('./tools', [
            'taking_notes', // 如何记笔记
            'vocabulary', // 专业词汇表
            'problems' // 疑难杂症大杂烩
        ])
    },
    {
        title: 'Java',
        children: get('./java', [
            'basis', // 基础知识
            'problems',
            'feature_jdk', // JDK新特性
            'multithreading',
            'design_patterns',
            'reflection' // 反射
        ])
    },
    {
        title: 'JavaScript',
        children: get('./javascript', [
            'problems',            
            'common_function',
            'keywords', // 关键字
            'built_in_object', // 内建对象
            'function', // 函数
            'object', // objects
            'asynchronous', // 异步
            'promise',
            'ecmascript'
        ])
    },
    {
        title: 'Python',
        children: get('./python', [
            'rules_naming', // 命名规则
            'built_in_things', // 内建
            'special', //特殊技巧
            'special_method',
            'problems',
            'ducking_type'
        ])
    },
    {
        title: 'C/C++',
        children: get('./cpp', [
            'snippet', // 代码片段
            'keywords', // 关键字
            'rules_naming', // 命名规范
            'header',
            'oop', // OOP 从Java迁移
            'problems'
        ])
    },
    {
        title: 'Linux',
        children: get('./linux', [
            'commands',
            'shell'
        ])
    },
    {
        title: '数据结构与算法',
        children: get('./dsa', [
            'basis'
        ])
    },
    {
        title: 'Node.js',
        children: get('./nodejs', [
            'problems',
            'package_management'
        ])
    },
    {
        title: '框架',
        children: get('./frameworks', [
            'tensorflow',
            'electron'
        ])
    },
    {
        title: '课程',
        children: get('./lessons', [
            'digital_circuits',
            'discrete_mathematics',
            'ml_and_big_data'
        ])
    }
]
