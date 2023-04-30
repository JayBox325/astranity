import { FaFilm } from "react-icons/fa"
import { ImVimeo, ImYoutube } from "react-icons/im";

export default {
    name: "videoEmbed",
    type: "object",
    // icon: FaFilm,
    title: "Video Embed",
    fields: [
      {
          title: 'Embed type',
          name: 'embedType',
          type: 'string',
          options: {
              list: [
                  'YouTube',
                  'Vimeo',
                  'Vimeo (distribution link)'
              ],
          },
          validation: Rule => Rule.required()
      },
      {
          name: "youtubeId",
          type: "string",
          description: "Paste only the YouTube video ID here.",
          title: "YouTube Video ID",
          hidden: ({ parent }) => parent?.embedType != 'YouTube',
          validation: Rule => Rule.custom((field, context) => (context.parent?.embedType == 'YouTube' && field == undefined) ? "Required" : true)
      },
      {
          name: "vimeo",
          type: "string",
          description: `Paste only the Vimeo video ID here.`,
          title: "Vimeo",
          hidden: ({ parent }) => parent?.embedType != 'Vimeo',
          validation: Rule => Rule.custom((field, context) => (context.parent?.embedType == 'Vimeo' && field == undefined) ? "Required" : true)
      },
      {
          name: "vimeoDistribution",
          type: "string",
          description: `Generate and paste a Vimeo distribution link. Note: Vimeo Pro is required for distribution links.`,
          title: "Vimeo (distribution link)",
          hidden: ({ parent }) => parent?.embedType != 'Vimeo (distribution link)',
          validation: Rule => Rule.custom((field, context) => (context.parent?.embedType == 'Vimeo (distribution link)' && field == undefined) ? "Required" : true)
      },
    ],

    preview: {
      select: {
        type: 'embedType'
      },
      prepare(selection) {
        const {type} = selection

        function icon(type) {
          switch (type) {
            case 'Vimeo (distribution link)':
              return ImVimeo
              break;
            case 'Vimeo':
              return ImVimeo
              break;
            case 'YouTube':
              return ImYoutube
              break;
          
            default:
              break;
          }
        }
  
        return {
          ...selection,
          title: 'Video Embed',
          icon: icon(type)
        }
      }
    }
  }