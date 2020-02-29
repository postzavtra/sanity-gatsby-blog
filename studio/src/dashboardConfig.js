export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5ac8710f852854d7454a71',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bbyf8ta4',
                  apiId: 'fa8e9e93-925e-4c01-b23d-4eb46a8c1a1a'
                },
                {
                  buildHookId: '5e5ac87153bf6420c9a3bad6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sym6s2yw',
                  apiId: 'ecef3148-0af5-49bb-a827-5e52b7aae7df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/postzavtra/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sym6s2yw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
