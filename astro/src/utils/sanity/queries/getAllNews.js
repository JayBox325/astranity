import { groq } from 'astro-sanity';

const GET_ALL_NEWS = groq`
  *[_type == "post"]{
    title,
    _id,
    slug,
    extract,
    mainImage,
    likesCount,
    fieldSeo,
    pageBuilder,
  }
`

export default GET_ALL_NEWS
