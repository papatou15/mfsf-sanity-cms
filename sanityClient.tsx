import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: true,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION!,
    token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN!
})