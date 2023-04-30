import {defineField, defineType} from 'sanity'

import { MdDensityMedium, MdHorizontalSplit,MdOutlineScreenSearchDesktop } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import fieldSeo from './Fields/fieldSeo'

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',

  groups: [
    {
      name: 'navigation',
      icon: MdDensityMedium,
      title: 'Main Menu',
      default: true
    },
    {
      name: 'footer',
      icon: MdHorizontalSplit,
      title: 'Footer'
    },
    {
      name: 'default',
      title: 'Site Settings',
      icon: FaCog
    },
    {
      name: 'seo',
      title: 'Global SEO',
      icon: MdOutlineScreenSearchDesktop
    },
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
      name: 'body',
      type: 'blockContent',
      title: 'Footer Body',
      group: 'footer'
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
    }),
    defineField(fieldSeo),
  ]
})
