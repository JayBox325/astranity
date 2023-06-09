import { groq } from 'astro-sanity';

const GET_GLOBAL_DATA = groq` 
    *[_type == "siteConfig"]{
        title,
        mainNav[]{
            ...,
            menuItem->{
                title,
                slug,
            },
            childItems[]{
                ...,
                childItem->{
                    title,
                    slug
                },
            },
        },
        fieldSeo,
        socialAccounts,
        footerBody
    }[0]
`

export default GET_GLOBAL_DATA
