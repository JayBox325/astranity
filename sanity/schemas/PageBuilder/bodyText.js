import { MdFormatAlignLeft } from "react-icons/md";

export default {
    name: "bodyText",
    type: "object",
    icon: MdFormatAlignLeft,
    title: "Body Text",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'body',
        type: 'blockContent',
        title: 'Body',
        validation: Rule => Rule.required()
      },
    ],

    preview: {
      select: {
        heading: 'heading',
        body: 'body',
      },
      prepare(selection) {
        const {heading, body} = selection
  
        return {...selection, title: 'Body Text', subtitle: heading ? heading : `${body[0].children[0].text.substring(0,20)}...`}
      },
    },
  }