import { FaCog } from "react-icons/fa";
import { MdFormatAlignLeft, MdImage, MdVerticalSplit } from "react-icons/md";

export default {
    name: "imageText",
    type: "object",
    icon: MdVerticalSplit,
    title: "Image with text",
    groups: [
      {
        name: 'content',
        title: 'Content',
        icon: MdFormatAlignLeft,
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
      },
      prepare(selection) {
        const {heading, body} = selection
  
        return {...selection, title: 'Image Text', subtitle: heading ?? null}
      },
    },
  }