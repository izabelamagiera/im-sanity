import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  type: 'document',
  title: 'homepage',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Page title',
    }),
  ],
})
