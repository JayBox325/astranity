import { defineType } from 'sanity'

export default defineType({
    name: 'fieldAccordions',
    title: 'Accordions',
    type: 'object',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body',
            validation: Rule => Rule.required()
        },
    ]
}) 