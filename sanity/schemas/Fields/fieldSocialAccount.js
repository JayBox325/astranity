import { ImFacebook2, ImTwitter, ImInstagram, ImYoutube, ImVimeo } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { defineType } from 'sanity'

export default defineType({
    name: 'fieldSocialAccount',
    title: 'Social Account',
    type: 'object',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL',
            validation: Rule => Rule.required()
        },
        {
            name: 'account',
            type: 'string',
            title: 'Account',
            options: {
                list: [
                    'Instagram',
                    'Facebook',
                    'LinkedIn',
                    'Twitter',
                    'Vimeo',
                    'YouTube'
                ],
            },
            validation: Rule => Rule.required()
        },
    ],

    preview: {
      select: {
        account: 'account',
        url: 'url'
      },

      prepare(selection) {
        const {account, url} = selection

        function icon(account) {
          switch (account) {
            case 'Facebook':
              return ImFacebook2
              break;
            case 'Twitter':
              return ImTwitter
              break;
            case 'Instagram':
              return ImInstagram
              break;
            case 'LinkedIn':
              return FaLinkedinIn
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
          title: `${account}`,
          icon: icon(account),
          subtitle: url
        }
      },
    },
}) 