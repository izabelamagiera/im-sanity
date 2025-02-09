import { defineField, defineType } from "sanity";


export default defineType({
    name: 'Button',
    title: 'Button',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        })
    ]
 })