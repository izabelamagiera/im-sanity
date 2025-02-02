import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import { Trophy } from '@phosphor-icons/react'
export default defineType({
  name: 'home',
  type: 'document',
  title: 'Homepage',
  groups: [
    {name: 'info', title: 'About me' },
    {name: 'projects', title: 'Featured projects'},
    {name: 'reviews', title: 'Reviews'},
    {name: 'links', title: 'Links' },
  ],
  icon: HomeIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
    }),

      defineField({
        name: 'about',
        title: 'About me - description',
        type: 'array',
        group: 'info',
        of: [
          {type: 'block'}
        ]
      }),
      defineField({
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        group: 'reviews',
        of: [
          defineField({
            name: 'reviews',
            type: 'reference',
            to: [
              {type: 'Review'}
            ]
          })
        ]
      }),
      defineField({
        name: 'links',
        title: 'Links',
        type: 'array',
        group: 'links',
        of: [
          defineField({
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              defineField({
                name: 'linkText',
                title: 'Link text',
                type: 'string',
              }),
              defineField({
                name: 'url',
                title: 'URL',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['https', 'mailto', 'tel']
                })
              })
            ]
          })
        ]
      }),
      defineField({
        name:  'experience',
        title: 'Experience section',
        type: 'object',
        icon: Trophy,
        fields: [
          defineField({
              name: 'title',
              title: 'Section title',
              type: 'string'
            }),
            defineField({
                name: 'label',
                title: 'Label',
                description: 'Text for CV upload link',
                type: 'string',
            }), 
            defineField({
                name: 'attachment',
                title: 'Upload resume',
                type: 'file',
            }),
            defineField({
                name: 'jobs',
                title: 'Experience',
                type: 'array',
                description: 'Employment history',
                of: [
                  {type: 'reference',
                    to: [
                      
                      {type: 'Job'}
                    ]
                  }
                ]
              }),
            ]
          }),
          defineField({
            name:  'portfolio',
            title: 'Projects section',
            type: 'object',
            fields: [
              defineField({
                  name: 'title',
                  title: 'Section title',
                  type: 'string',
                }),
                defineField({
                    name: 'projects',
                    title: 'Projects',
                    type: 'array',
                    description: 'Completed projects',
                    of: [
                      {type: 'reference',
                        to: [
                          
                          {type: 'Project'}
                        ]
                      }
                    ]
                  }),
                ]
            }),
        ],
    

  preview: {
    select: {
      title: 'Homepage',
    },
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
