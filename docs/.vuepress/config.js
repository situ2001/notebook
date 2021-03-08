module.exports = {
    title: 'Situ Book',
    description: 'Taking notes...',
    themeConfig: {
        nav: [
            { text: 'Blog', link: 'https://blog.situ2001.com' },
            { text: 'GitHub', link: 'https://github.com/situ2001' }
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Java',
                children: [
                    '/java/多线程.md',
                    '/java/设计模式.md',
                    '/java/反射.md',
                    '/java/问题记录.md'
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    './javascript/读书笔记.md',
                    './javascript/问题记录.md'
                ]
            },
            {
                title: 'Python',
                children: [
                    '/python/问题记录.md'
                ]
            },
            {
                title: 'C++',
                children: [
                    '/cpp/OOP.md',
                    '/cpp/问题记录.md'
                ]
            },
            {
                title: 'Others',
                children: [

                ]
            }
        ]
    }
}