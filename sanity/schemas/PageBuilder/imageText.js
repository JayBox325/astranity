import { FaCog } from "react-icons/fa";
import { MdArtTrack, MdImage } from "react-icons/md";

export default {
    name: "imageText",
    type: "object",
    icon: MdArtTrack,
    title: "Image with text",
    groups: [
      {
        name: 'content',
        title: 'Content',
        icon: MdArtTrack,
        default: true
      },
      {
        name: 'image',
        title: 'Image',
        icon: MdImage,
      },
      {
        name: 'options',
        icon: FaCog,
        title: 'Options'
      }
    ],
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
        group: 'content'
      },
      {
        name: 'body',
        type: 'blockContent',
        title: 'Body',
        group: 'content'
      },
      {
        name: 'button',
        type: 'fieldButton',
        title: 'Button',
        group: 'content'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        group: 'image',
        validation: Rule => Rule.required()
      },
      {
          title: 'Image alignment',
          name: 'alignment',
          type: 'string',
          group: 'options',
          initialValue: 'Left image',
          options: {
            list: [
              'Left image',
              'Right image',
              'Background image'
            ],
          },
          validation: Rule => Rule.required()
      },
    ],

    preview: {
      select: {
        heading: 'heading',
        body: 'body',
        alignment: 'alignment'
      },
      prepare(selection) {
        const {heading, alignment} = selection
  
        return {...selection, title: 'Image Text', subtitle: `${alignment}${heading ? `, ${heading}` : ''}`}
      },
    },
  }