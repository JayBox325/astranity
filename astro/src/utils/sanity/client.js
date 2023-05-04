import { createClient } from '@sanity/client'

const client = () => {
    return createClient({
        projectId: "uh41p3xe",
        dataset: "production",
        useCdn: true,
        apiVersion: "2023-03-25"
    })
}

export default client