import {defineField, defineType} from 'sanity'
import { MdEditDocument,MdInsertDriveFile,MdOutlineScreenSearchDesktop,MdViewComfy } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import fieldPublished from './Fields/fieldPublished'
import fieldExtract from './Fields/fieldExtract'
import fieldPageBuilder from './Fields/fieldPageBuilder'
import fieldSeo from './Fields/fieldSeo'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: MdInsertDriveFile,
  type: 'document',
  groups: [
    {
      name: 'default',
      title: 'Post',
      icon: MdEditDocument,
      default: true
    },
    {
      name: 'content',
      icon: MdViewComfy,
      title: 'Content'
    },
    {
      name: 'options',
      icon: FaCog,
      title: 'Options'
    },
    {
      name: 'seo',
      icon: MdOutlineScreenSearchDesktop,
      title: 'SEO'
    }
  ],
  fields: [

    // Default
    defineField({
      name: 'title',
      title: 'Title',
      group: 'default',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'default',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),

    // Content
    defineField(fieldPageBuilder),

    // Options
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      group: 'options',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      group: 'options',
      options: {
        hotspot: true
      }
    }),
    defineField(fieldExtract),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'options',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField(fieldSeo),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      published: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author, published} = selection
      const date = new Date(published)
      const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`

      return {...selection, subtitle:`${author ? `${author} \u1B7C`: ''} ${published ? `${formattedDate}` : 'Not yet  published'}`}
    },
  },
})
