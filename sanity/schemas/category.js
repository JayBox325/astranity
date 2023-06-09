import { MdCategory } from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  icon: MdCategory,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'extract',
      title: 'Extract',
      rows: 3,
      type: 'text',
    }),
  ],
})
