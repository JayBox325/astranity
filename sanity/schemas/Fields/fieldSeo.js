import { defineType } from 'sanity'

export default defineType({
    name: 'fieldSeo',
    title: 'SEO',
    group: 'seo',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            description: 'The page title will be used by default.',
            title: 'Page Title',
            validation: Rule => Rule.max(70)
        },
        {
            name: 'description',
            type: 'text',
            description: 'The page extract will be used by default.',
            rows: 4,
            title: 'Description',
            validation: Rule => Rule.max(160)
        },
    ]
}) 