import { CodeBlock } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Project',
    title: 'Project',
    type: 'document',
    icon: CodeBlock,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    validation: rule => rule.required()
                })
            ],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'darkModeImage',
            title: 'Alt dark mode image',
            type: 'image',
            description: 'Add image to alternate between dark and light mode',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    validation: rule => rule.required()
                })
            ],
        }),
        defineField({
            name: 'url',
            title: 'Project URL',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['https']
            })
        }),
        defineField({
            name: 'description',
            title: 'Project description',
            type: 'array',
            of: [
                {type: 'block'}
            ],
            validation: rule => rule.required()
        }),

    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
            {type: 'reference',
                to: [{type: 'tag'}]
            }
        ]
    }),
        
    ],
          preview: {
        select: {
          title: 'title',
          media: 'image'
        },
  },
})