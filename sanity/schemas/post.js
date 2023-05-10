import {defineField, defineType} from 'sanity'
import { MdEditDocument,MdInsertDriveFile,MdOutlineScreenSearchDesktop,MdViewComfy } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import fieldPublished from './Fields/fieldPublished'
import fieldExtract from './Fields/fieldExtract'
import fieldPageBuilder from './Fields/fieldPageBuilder'
import { SlugInput } from 'sanity-plugin-prefixed-slug'
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
        type: 'slug',
        // Add the custom input to the `component` object of your field
        components: {
          input: SlugInput,
        },
        options: {
          source: 'title',
          urlPrefix: 'news/',
          // Use isUnique/maxLength just like you would w/ the regular slug field
          // isUnique: MyCustomIsUniqueFunction,
          maxLength: 30,
          // If you want to save the full URL in the slug object, set storeFullUrl to `true`
          // Example storage: { _type: "slug", current: "my-slug", fullUrl: "https://site.com/my-slug" }
          storeFullUrl: true,
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
    defineField({
      name: 'likesCount',
      title: 'Likes Count',
      description: 'This is a read-only field as it is used to track likes from users',
      type: 'string',
      readOnly: false,
      group: 'options',
    }),
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
