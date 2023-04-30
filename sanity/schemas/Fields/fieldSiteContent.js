import { MdInsertDriveFile } from 'react-icons/md'
import { defineType } from 'sanity'

export default defineType({
    name: 'fieldSiteContent',
    title: 'Site Content',
    icon: MdInsertDriveFile,
    type: 'object',
    fields: [
        {
            name: 'entry',
            title: 'Entry',
            type: 'reference',
            to: [
              {
                type: 'site'
              },
              {
                type: 'post'
              }
            ],
            title: 'Entry',
            validation: Rule => Rule.required()
        },
    ],

    preview: {
      select: {
        heading: 'entry.title',
        media: 'entry.mainImage',
      },
      prepare(selection) {
        const {heading, media} = selection
  
        return {...selection, title: heading}
      },
    },
}) 