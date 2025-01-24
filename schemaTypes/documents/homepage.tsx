import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Page title here',
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
    }),
  ],
})
