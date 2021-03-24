let get = (dir, items) => {
    for (e in items) {
        items[e] = dir + '/' + items[e] + '.md';
    }
    return items;
};

module.exports = [
    {
        title: '杂项',
        children: get('/tools', [
            'take_notes', // 如何记笔记
            'vocabulary' // 专业词汇表
        ])
    },
    {
        title: 'Java',
        children: get('/java', [
            'basis', // 基础知识
            '问题记录',
            'feature_jdk', // JDK新特性
            '多线程',
            '设计模式',
            'reflection' // 反射
        ])
    },
    {
        title: 'JavaScript',
        children: get('/javascript', [
            'problems',            
            'common_function',
            'keywords', // 关键字
            'built_in_object', // 内建对象
            'function', // 函数
            'objects', // objects
            'asynchronous', // 异步
            'emcascript'
        ])
    },
    {
        title: 'Python',
        children: get('/python', [
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
        children: get('/cpp', [
            'snippet', // 代码片段
            'keywords', // 关键字
            'rules_naming', // 命名规范
            'OOP', // OOP 从Java迁移
            '问题记录'
        ])
    },
    {
        title: 'Linux',
        children: get('/linux', [
            'commands',
            'shell'
        ])
    },
    {
        title: '数据结构与算法',
        children: get('/data_structure_algorithm', [])
    },
    {
        title: 'Node.js',
        children: get('/nodejs', [
            'package_management'
        ])
    },
    {
        title: '框架',
        children: get('/frameworks', [
            'tensorflow',
            'electron'
        ])
    },
    {
        title: '课程',
        children: get('/lessons', [
            'digital_circuits',
            'discrete_mathematics',
            'ml_and_big_data'
        ])
    }
]