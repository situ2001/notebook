module.exports = {
    title: 'Situ Book',
    description: 'Taking notes...',
    evergreen: true,
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-katex'));
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo-book.svg' }],
        ['link', { rel: 'stylesheet', href: '/katex.min.css'}]
    ],
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
                    '/java/基础知识.md',
                    '/java/问题记录.md',
                    '/java/多线程.md',
                    '/java/设计模式.md',
                    '/java/反射.md'
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    './javascript/读书笔记.md',
                    './javascript/async.md',
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
                title: 'C/C++',
                children: [
                    '/cpp/code_sample.md',
                    '/cpp/OOP.md',
                    '/cpp/问题记录.md'
                ]
            },
            {
                title: 'Git',
                children: []
            },
            {
                title: '其他专业课',
                children: [
                    '/basic_lessons/数字电路.md'
                ]
            },
            {
                title: '工具',
                children: [
                    '/tools/note.md'
                ]
            },
            {
                title: 'Others',
                children: [
                    '/others/创新班.md'
                ]
            }
        ]
    }
}