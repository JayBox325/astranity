import { groq } from 'astro-sanity';

const GET_SITE_PAGE_BY_SLUG = groq`
  *[_type == "site" && slug.current == $slug]{
    title,
    slug,
    mainImage,
    extract,
    parent->{
        title,
        slug
    },
    fieldSeo,
    pageBuilder,
  }[0]
`

export default GET_SITE_PAGE_BY_SLUG
