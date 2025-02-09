import { Code } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Job',
    title: 'Work experience',
    type: 'document',
    icon: Code,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
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
            name: 'intro',
            title: 'Job highlight',
            type: 'text',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'dates',
            title: 'Job dates',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Job dates',
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
        
    ]
})