import { groq } from 'astro-sanity';

const GET_NEWS_BY_SLUG = groq`
  *[_type == "post" && slug.current == $slug]{
    title,
    slug,
    extract,
    mainImage,
    fieldSeo,
    pageBuilder,
  }[0]
`

export default GET_NEWS_BY_SLUG
