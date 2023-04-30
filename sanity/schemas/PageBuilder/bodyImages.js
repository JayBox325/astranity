import { MdImage } from "react-icons/md";

export default {
    name: "bodyImages",
    type: "object",
    icon: MdImage,
    title: "Body Images",
    fields: [
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption'
      },
    ],

    preview: {
      select: {
        images: 'images',
        caption: 'caption'
      },
      prepare(selection) {
        const {images, caption} = selection
        let title = ''

        switch (images.length) {
          case 1:
            title = 'Single image'
            break;

          case 2:
            title = 'Dual images'
            break;

          case 3:
            title = 'Trio images'
            break;

          case 4:
            title = 'Quad images'
            break;
        
          default:
            title = 'Images'
            break;
        }
  
        return {...selection, title: 'Body Images', subtitle: `${title} ${caption ? `, ${caption}` : ''}`}
      },
    },
  }