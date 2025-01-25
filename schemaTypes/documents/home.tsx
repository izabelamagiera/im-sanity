import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
export default defineType({
  name: 'home',
  type: 'document',
  title: 'Homepage',
  icon: HomeIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Page title',
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
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
