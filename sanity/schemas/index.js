import blockContent from './blockContent'
import category from './category'
import post from './post'
import site from './site'
import author from './author'
import siteConfig from './siteConfig'
import bodyText from './PageBuilder/bodyText'
import bodyImages from './PageBuilder/bodyImages'
import accordions from './PageBuilder/accordions'
import fieldAccordions from './Fields/fieldAccordions'
import homepage from './homepage'
import fieldPublished from './Fields/fieldPublished'
import fieldButton from './Fields/fieldButton'
import imageText from './PageBuilder/imageText'

export const schemaTypes = [
    // Fields
    fieldAccordions,
    fieldPublished,
    fieldButton,
    blockContent,

    // Pages/Posts
    post,
    author,
    category,
    homepage,
    site,
    siteConfig,

    // Page Builder
    bodyText,
    bodyImages,
    imageText,
    accordions
]
