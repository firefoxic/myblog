export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60060d85e9132874d582c355',
                  title: 'Sanity Studio',
                  name: 'myblog-studio-ojxboeif',
                  apiId: '606b05fa-4edd-4aa6-bd73-ba0a713928d7'
                },
                {
                  buildHookId: '60060d8571e7dfd926c9789b',
                  title: 'Blog Website',
                  name: 'myblog-web-g6uqsgkw',
                  apiId: '7c896168-4fd5-4a07-9675-1d8c46dcfed2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firefoxic/myblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://myblog-web-g6uqsgkw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
