import { defineType } from 'sanity'

export default defineType({
    name: 'fieldButton',
    type: 'object',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Label',
            validation: Rule => Rule.required()
        },
        {
            title: 'Link type',
            name: 'linkType',
            type: 'string',
            initialValue: 'Entry select',
            options: {
                list: [
                    'Entry select',
                    'URL',
                    'Email'
                ],
            },
            validation: Rule => Rule.required()
        },
        {
            name: "email",
            type: "email",
            title: "Email",
            hidden: ({ parent }) => parent?.linkType != 'Email',
            validation: Rule => Rule.custom((field, context) => (context.parent?.linkType == 'Email' && field == undefined) ? "Required" : true)
        },
        {
            name: "url",
            type: "url",
            description: "When pasting a link to another website, it is recommended to open this link in a new tab.",
            title: "URL",
            hidden: ({ parent }) => parent?.linkType != 'URL',
            validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
              scheme: ["https", "http", "mailto", "tel"],
            }).custom((field, context) => (context.parent?.linkType == 'URL' && field == undefined) ? "Required" : true)
        },
        {
            name: "entry",
            description: "Select another entry to create an automatic link to.",
            type: "reference",
            to: [
                { type: "site" },
                { type: "post" }
            ],
            hidden: ({ parent }) => parent?.linkType != 'Entry select',
            validation: Rule => Rule.custom((field, context) => (context.parent?.linkType == 'Entry select' && field == undefined) ? "Required" : true)
        },
        {
            title: 'Open in new tab?',
            name: 'target',
            type: 'boolean'
        }
    ]
}) 