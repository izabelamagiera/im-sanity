import { Flag } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Masthead',
    title: 'Masthead',
    type: 'document',
    icon: Flag,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
          name: 'sectionHeader',
          title: 'Section header',
          type: 'reference',
          to: [
              {type: 'SectionHeader'},]
        }),
      defineField({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        description: 'Some description',
        of: [
          {type: 'reference',
            to: [
              {type: 'Job'}
            ]
          }
        ]
      })
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