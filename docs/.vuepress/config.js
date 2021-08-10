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
            // 'guide/02_afstelregels/',
            // 'guide/03_systeem_theorie/',
            // 'guide/04_regeltechniek/',
            // 'guide/05_praktische_aanpak/',
            // 'guide/06_filters/',
            // 'guide/07_intelligentcontrol/',
            // 'guide/08_cases/',
            'guide/videotheek/',
        ],
        sidebarDepth: 1,
        repo: 'CrianBox/site_light',
        docsDir: 'docs',
        docsBranch: 'master'
    },
    plugins: [
        'vuepress-plugin-mathjax'
    ],
}