import { groq } from 'astro-sanity';

const GET_HOMEPAGE = groq`*[_type == "homepage"][0]{
	mainImage,
	pageBuilder,
	fieldSeo
}`

export default GET_HOMEPAGE
