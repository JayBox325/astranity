import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import { BiNews } from "react-icons/bi"

import { MdEditDocument, MdHomeFilled, MdPerson, MdLabel, MdFormatAlignLeft, MdCategory } from "react-icons/md";
import { FaCogs } from 'react-icons/fa'
import Logo from './utils/components/Logo';

export default defineConfig({
  name: 'default',
  title: 'Astranity',

  projectId: 'uh41p3xe',
  dataset: 'production',

  studio: {
    components: {
      logo: Logo
    }
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .icon(MdHomeFilled)
              .child(
                S.document()
                  .title('Homepage')
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.listItem()
              .title('Site pages')
              .icon(MdFormatAlignLeft)
              .schemaType('site')
              .child(
                S.documentList()
                  .title('Site pages')
                  .filter('_type == "site"')

                // Separated child list!
                // .filter('_type == "site" && parent == null')
                // .child((id) =>
                //   S.documentList()
                //     .title(id)
                //     .filter(`_type == "site" && parent._ref == $id`)
                //     .params({id})
                // )
              ),
            S.listItem()
              .title('News')
              .icon(BiNews)
              .schemaType('post')
              .child(
                S.documentTypeList('post')
                  .title('News')
              ),
            S.divider(),
            S.listItem()
              .title('Authors')
              .icon(MdPerson)
              .schemaType('author')
              .child(
                S.documentTypeList('author')
                  .title('Authors')
              ),
            S.listItem()
              .title('Categories')
              .icon(MdCategory)
              .schemaType('category')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
              ),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .icon(FaCogs)
              .child(
                S.document()
                  .title('Site Settings')
                  .schemaType('siteConfig')
                  .documentId('siteConfig')
              )
          ])
    }),
    visionTool(),
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})
