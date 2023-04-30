import {defineField, defineType} from 'sanity'
import fieldPageBuilder from './Fields/fieldPageBuilder'
import { MdViewComfy } from "react-icons/md"

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
    defineField(fieldPageBuilder),
  ]
})
