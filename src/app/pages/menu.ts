export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Home',
        icon: 'dashboard'
    },
    {
        path: 'mailbox',
        title: 'Mailbox',
        icon: 'envelope-o'
    },
    {
        path: 'editor',
        title: 'CKEditor',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Icon',
        icon: 'diamond'
    },
    {
        path: 'ui',
        title: 'UI Components',
        icon: 'laptop',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'panels',
                title: 'Panels'
            },
            {
                path: 'loading',
                title: 'Loading'
            }
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'default-charts',
                title: 'Echarts'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'smart-tables',
                title: 'Smart Tables'
            }
        ]
    },
    {
        path: 'extra-pages',
        title: 'Extra Pages',
        icon: 'sitemap',
    }
]