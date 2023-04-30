import { MdHorizontalSplit } from "react-icons/md";

export default {
    name: "accordions",
    type: "object",
    icon: MdHorizontalSplit,
    title: "Accordions",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'accordions',
        type: 'array',
        title: 'Accordions',
        of: [
          {
            type: 'fieldAccordions',
          }
        ],
        validation: Rule => Rule.required()
      },
    ],

    preview: {
      select: {
        accordions: 'accordions',
        title: 'heading'
      },

      prepare(selection) {
        const {accordions, title} = selection
  
        return {...selection, title: 'Accordions', subtitle: `${title ? `${title} (` : ''}${accordions.length}x accordions${title ? ')' : ''}`}
      },
    },
  }