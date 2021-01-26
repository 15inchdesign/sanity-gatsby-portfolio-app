export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6010633978eb210aa18c45a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-app-studio',
                  apiId: '603c608c-ec36-4554-8685-b96a3c2fff0d'
                },
                {
                  buildHookId: '60106339712f6809e1351bf7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-app',
                  apiId: 'adc8df20-428a-4802-aee5-164f3fc606ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/15inchdesign/sanity-gatsby-portfolio-app',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-app.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
