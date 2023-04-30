import { FaQuoteLeft } from "react-icons/fa";

export default {
    name: "pullQuote",
    type: "object",
    icon: FaQuoteLeft,
    title: "Pull Quote",
    fields: [
      {
        name: 'quote',
        type: 'text',
        rows: 4,
        title: 'Quote',
        validation: Rule => Rule.required()
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
      },
    ],

    preview: {
      select: {
        name: 'name',
        quote: 'quote',
        role: 'role'
      },
      prepare(selection) {
        const {name, quote, role} = selection
  
        return {
          ...selection,
          title: 'Pull Quote',
          subtitle: quote.length > 20 ? `${quote.substring(0,20)}...` : quote
        }
      },
    },
  }