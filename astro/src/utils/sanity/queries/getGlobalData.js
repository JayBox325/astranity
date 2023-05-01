import { useSanityClient, groq } from 'astro-sanity';

export async function getGlobalData() {
  const query = groq` 
    *[_type == "siteConfig"][0]{
        title,
        mainNav[]{
          ...,
          menuItem->{
            title,
            slug,    
          },
          childItems[]{
            ...,
            childItem->{title, slug},
          },
        },
        fieldSeo,
        socialAccounts,
        footerBody
    }
  `
  
  const globalData = await useSanityClient().fetch(query)
  return globalData
}