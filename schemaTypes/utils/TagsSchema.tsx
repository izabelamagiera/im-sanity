import { Tag } from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: Tag,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tag',
    }),
  ],  
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title
      }
    },
  },
})
