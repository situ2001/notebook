const sidebar = require('./sidebar');

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
        sidebar: sidebar
    }
};