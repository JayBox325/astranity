import {defineField, defineType} from 'sanity'
import fieldPageBuilder from './Fields/fieldPageBuilder'
import { MdOutlineScreenSearchDesktop, MdViewComfy } from "react-icons/md"
import fieldSeo from './Fields/fieldSeo'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  groups: [
    {
      name: 'content',
      icon: MdViewComfy,
      title: 'Content',
      default: true
    },
    {
      name: 'seo',
      icon: MdOutlineScreenSearchDesktop,
      title: 'SEO'
    },
  ],
  
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Image',
      group: 'content',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField(fieldSeo),
    defineField(fieldPageBuilder),
  ]
})
