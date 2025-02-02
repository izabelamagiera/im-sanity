import { RadioButton } from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'
// Button
export default defineType({
  name: 'Button',
  type: 'document',
  title: 'Button',
  icon: RadioButton,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Button title',
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Button text',
    }),
     defineField({
      name: 'url',
      type: 'string',
      title: 'Button URL',
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
