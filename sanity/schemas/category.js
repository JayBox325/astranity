import { MdLabel } from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  icon: MdLabel,
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
