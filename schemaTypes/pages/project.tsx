import { FolderSimple } from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project details',
  icon: FolderSimple,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Project title',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: rule => rule.required()
    }),
    defineField({
      type: 'image',
      name: 'featureImage',
      title: 'Feature image',
      fields: [
        {name: 'alt',
          title: 'Alt text',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'projectIntro',
      title: 'Project intro',
      type: 'array',
      of: [{type: 'block'}]
      // add validation - max characters
    }),
    defineField({
      name:'projectDescription',
      title: 'Project description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'tags',
      title: 'Project tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description: 'Some description',
      of: [
        {type: 'reference',
          to: [
            {type: 'Masthead'}
          ]
        }
      ]
    })
  ],
      preview: {
        select: {
          title: 'title',
          media: 'featureImage'
        },
  },
})
