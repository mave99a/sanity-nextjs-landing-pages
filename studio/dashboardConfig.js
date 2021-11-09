export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '618a30d37965fe28aa81a833',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8o1s4hsr',
                  apiId: 'b1f88095-f011-488f-9bec-fac2c037861f'
                },
                {
                  buildHookId: '618a30d3066f3b099ab8ee08',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kficd7cx',
                  apiId: 'ea34ec56-86b3-4cdd-9c8c-819071a3e772'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mave99a/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kficd7cx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
