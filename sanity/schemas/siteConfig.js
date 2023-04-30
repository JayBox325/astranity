import {defineField, defineType} from 'sanity'

import { MdDensityMedium } from "react-icons/md"
import { FaCog } from "react-icons/fa"

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',

  groups: [
    {
      name: 'default',
      title: 'Site Settings',
      icon: FaCog,
      default: true
    },
    {
      name: 'navigation',
      icon: MdDensityMedium,
      title: 'Main Menu'
    }
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Website Title',
      group: 'default',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        title: 'Main Navigation',
        name: 'mainNav',
        group: 'navigation',
        description: 'Select pages for the top main menu',
        type: 'array',
        of: [
            {
                type: 'fieldMenuItem'
            },
        ]
    }),
    defineField({
        title: 'Social Accounts',
        name: 'socialAccounts',
        group: 'default',
        type: 'array',
        of: [
            {
                type: 'fieldSocialAccount'
            },
        ]
    })
  ]
})
