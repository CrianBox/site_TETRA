module.exports = {
    title: 'TETRA project OptiPID+',
    description: 'Geproduceerd tijdens de werking van het TETRA project OptiPID+',
    themeConfig: {
        nav:[
            {text: 'Home', link: '/'},
            {text: 'Contact', link: '/'},
        ],
        sidebar: [
            'guide/01_introduction/',
            'guide/videotheek/',
        ],
        sidebarDepth: 1,
        repo: 'CrianBox/site_TETRA',
        docsDir: 'docs',
        docsBranch: 'master'
    },
    plugins: [
        'vuepress-plugin-mathjax'
    ],
}