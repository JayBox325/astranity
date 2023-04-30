import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ]
})
