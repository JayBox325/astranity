import { defineType } from 'sanity'
import { MdOutlineAddCircle } from 'react-icons/md'

export default defineType({
    name: 'fieldAccordions',
    title: 'Accordions',
    icon: MdOutlineAddCircle,
    type: 'object',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body',
            validation: Rule => Rule.required()
        },
    ]
}) 