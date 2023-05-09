import { groq } from 'astro-sanity';

const GET_SITE_PAGE_BY_SLUG = groq`
  *[_type == "site" && slug.current == $slug]{
    title,
    slug,
    extract,
    entryType,
    parent->{
      title,
      slug
    },
    mainImage,
    fieldSeo,
    pageBuilder,
  }[0]
`

export default GET_SITE_PAGE_BY_SLUG
