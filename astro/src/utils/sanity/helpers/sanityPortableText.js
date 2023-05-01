import { portableTextToHtml } from 'astro-sanity'

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext)
}