import {defineField, defineType} from 'sanity'
import {createClient} from '@sanity/client'

import { MdEditDocument,MdViewComfy, MdOutlineScreenSearchDesktop, MdInsertDriveFile } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import fieldExtract from './Fields/fieldExtract'
import fieldPageBuilder from './Fields/fieldPageBuilder'
import fieldSeo from './Fields/fieldSeo'

async function asyncSlugifier(input) {

  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || "uh41p3xe",
    dataset: process.env.SANITY_DATASET || "production",
    useCdn: true,
    apiVersion: process.env.SANITY_API_VERSION || "2023-03-25"
  })
  
  const parentQuery = '*[_id == $id][0]'; // a GROQ query, feel free to change this up to match what you need
  const parentQueryParams = {
    id: input.doc.parent?._ref || '',
  };
  const parent = await client.fetch(
    parentQuery,
    parentQueryParams,
  );
  const parentSlug = parent?.slug?.current ? `${parent.slug.current}/` : ''; // if there's no parent assign an empty string, it will make the function return the current slug as the root
  const pageSlug = input.doc.title
    .toLowerCase()
    .replace(/\s+/g, '-') // slugify the title using a simple regex
    .slice(0, 200);
  return `${parentSlug}${pageSlug}`;
}

export default defineType({
  name: 'site',
  title: 'Site',
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
    defineField(fieldSeo),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'default',
      type: 'slug',
      options: {
        source: (doc, options) => ({ doc, options }),
        slugify: asyncSlugifier
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      group: 'default',
      to: [
        {
          type: 'site'
        }
      ]
    }),

    // Content
    defineField(fieldPageBuilder),

    // Options
    defineField({
      name: 'mainImage',
      title: 'Image',
      group: 'options',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField(fieldExtract),
  ],

  preview: {
    select: {
      title: 'title',
      parent: 'parent.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {parent} = selection
      return {...selection, subtitle: parent && `\u2196 ${parent}`}
    },
  },
})
