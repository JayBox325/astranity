import blockContent from './Fields/blockContent'
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
import videoEmbed from './PageBuilder/videoEmbed'
import fieldMenuItem from './Fields/fieldMenuItem'
import fieldSocialAccount from './Fields/fieldSocialAccount'
import fieldSeo from './Fields/fieldSeo'
import pullQuote from './PageBuilder/pullQuote'
import siteContent from './PageBuilder/siteContent'
import fieldSiteContent from './Fields/fieldSiteContent'

export const schemaTypes = [
    // Fields
    fieldAccordions,
    fieldPublished,
    fieldSiteContent,
    fieldButton,
    fieldMenuItem,
    fieldSeo,
    fieldSocialAccount,
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
    videoEmbed,
    siteContent,
    imageText,
    pullQuote,
    accordions
]
