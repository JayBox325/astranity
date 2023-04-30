import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      
      lists: [{title: 'Bullet', value: 'bullet'}],
      
      marks: {
        
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
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
          }
        ]
      }
    })
  ]
})