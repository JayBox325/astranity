import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        title: 'Main Navigation',
        name: 'mainNav',
        description: 'Select pages for the top main menu',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{ type: 'site' }],
            },
        ]
    })
  ]
})
