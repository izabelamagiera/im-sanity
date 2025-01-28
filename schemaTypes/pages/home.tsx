import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
export default defineType({
  name: 'home',
  type: 'document',
  title: 'Homepage',
  groups: [
    {name: 'hero', title: 'Page hero'},
    {name: 'projects', title: 'Featured projects'},
    {name: 'info', title: 'About me' },
    {name: 'reviews', title: 'Reviews'}
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
      name: 'heroBanner',
      title: 'Page hero banner',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          type: 'string',
          name: 'preheader',
          title: 'Preheader label'
        }),
        defineField({
          type: 'text',
          name: 'headline',
          title: 'Headline',
          validation: rule => rule.required()
        }),
        defineField({
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [
            defineField({
              name:'logoImage',
              title: 'Logo image',
              type: 'image',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'ALt text',
                  type: 'string',
                  validation: rule => rule.required()
                })
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'portfolio',
      title: 'Featured projects',
      type: 'array',
      group: 'projects',
      of: [
        defineField({
            name: 'projects',
            title: 'Featured projects',
            type: 'reference',
            to: [
              {type: 'project'}
            ]
          })
      ]
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
        name: 'skills',
        title: 'My skills',
        type: 'object',
        group: 'info',
        fields: [
          defineField({
            name: 'title',
            title: 'Section title',
            type: 'string'
          }),
          defineField({
            name: 'listOfSkills',
            title: 'Skills as bullet points',
            type: 'array',
            of: [
              defineField({
                name: 'bullet',
                title: 'Add item',
                type: 'string'
              })
            ]
          })
        ]
      }),
      defineField({
        name: 'tech',
        title: 'Tech stack',
        type: 'object',
        group: 'info',
        fields: [
          defineField({
            name: 'title',
            title: 'Section title',
            type: 'string'
          }),
          defineField({
            name: 'techList',
            title: 'Tech stack as bullet points',
            type: 'array',
            of: [
              defineField({
                name: 'bullet',
                title: 'Add item',
                type: 'string'
              })
            ]
          })
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
      })
    
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
