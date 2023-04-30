import { MdViewCarousel } from "react-icons/md";

export default {
    name: "siteContent",
    type: "object",
    icon: MdViewCarousel,
    title: "Site Content",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
        validation: Rule => Rule.required()
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'fieldSiteContent',
          }
        ],
        validation: Rule => Rule.required()
      }
    ],

    preview: {
      select: {
        heading: 'heading',
      },
      prepare(selection) {
        const {heading} = selection
  
        return {...selection, title: 'Site Content', subtitle: heading ? heading : ''}
      },
    },
  }