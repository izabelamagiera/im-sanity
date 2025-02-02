import { Star } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Review',
    title: 'Review',
    type: 'document',
    icon: Star,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'body',
            title: 'Quote',
            type: 'array',
            of: [
                {type: 'block'}
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