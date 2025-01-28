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