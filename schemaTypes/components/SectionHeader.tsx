import { Flag } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'SectionHeader',
    title: 'Section header',
    type: 'document',
    icon: Flag,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Section title',
            description: 'Section title, left align.',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'addLink',
            title: 'Include link',
            type: 'string',
            options: {
                list: [
                    {title: 'Link', value: 'href'},
                    {title: 'File download', value:'download'}
                ]
            },
            description: 'Option to add url or file download. Appears to the right edge of section header.',
        }),
        defineField({
            name: 'link',
            title: 'External link',
            type: 'object',
            hidden: ({ parent, value }) => !value && parent?.addLink !== 'href',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }), 
                defineField({
                    name: 'textLink',
                    title: 'Add link',
                    type: 'url',
                    validation: Rule => Rule.uri({
                        scheme: ['https']
                    })
                }),
            ]
        }),
        defineField({
            name: 'attachFile',
            title: 'File download',
            type: 'object',
            hidden: ({ parent, value }) => !value && parent?.addLink !== 'download',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }), 
                defineField({
                    name: 'downloadFile',
                    title: 'Attach file',
                    type: 'file',
                }),
            ]
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