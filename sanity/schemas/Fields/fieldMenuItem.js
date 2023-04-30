import { defineType } from 'sanity'

export default defineType({
    name: 'fieldMenuItem',
    title: 'Menu Item',
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
            type: 'array',
            of: [
                {
                    title: 'Select child item',
                    type: 'reference',
                    to: [{ type: 'site' }]
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
        const {title, childItems} = selection
        console.log('children', childItems)
        return {...selection, title: title, subtitle: childItems?.length ? `With ${childItems.length} children` : ''}
      },
    },
}) 