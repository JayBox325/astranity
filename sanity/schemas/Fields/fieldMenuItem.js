import { MdInsertDriveFile } from 'react-icons/md'
import { defineType } from 'sanity'

export default defineType({
  name: 'fieldMenuItem',
  title: 'Menu Item',
  icon: MdInsertDriveFile,
  type: 'object',
  fields: [
    {
      title: 'Menu item',
      name: 'menuItem',
      description: 'Select menu item page',
      type: 'reference',
      to: [{ type: 'site' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Children',
      name: 'childItems',
      icon: MdInsertDriveFile,
      type: 'array',
      of: [
        {
          name: 'fieldMenuChildItem',
          title: 'Child Item',
          icon: MdInsertDriveFile,
          type: 'object',
          fields: [
            {
              title: 'Child item',
              name: 'childItem',
              description: 'Select child item',
              type: 'reference',
              to: [{ type: 'site' }],
              validation: Rule => Rule.required()
            },
          ],
        },
      ]
    }
  ],

  preview: {
    select: {
      title: 'menuItem.title',
      childItems: 'childItems'
    },
    prepare(selection) {
      const { title, childItems } = selection
      console.log('children', childItems)
      return { ...selection, title: title, subtitle: childItems?.length ? `With ${childItems.length} children` : '' }
    },
  },
}) 