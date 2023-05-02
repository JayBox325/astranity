import imageUrlBuilder from "@sanity/image-url";
import { useSanityClient } from "astro-sanity";

function imgUrl(source) {
    const builder = imageUrlBuilder(useSanityClient());

    return builder.image(source)
}

export default imgUrl