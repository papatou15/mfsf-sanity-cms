import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: true,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION!,
    token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN!
    // projectId: 'm2q9id0y',
    // dataset: 'production',
    // useCdn: true,
    // apiVersion: '2023-05-03',
    // token: 'sknRW7YuKyj4p7YjRRUTanJmS4taXr7VZ5lMMW93dk77kjM54BvflzpsJsvhxmfoiUe7FG5RcyD1gLc2UdpdaZXyQJJCcxv3HAhco4hFszoQSB6XYKMkCV9YVFhp8TEZ0Dt0XvXvxPgy0PLjw7dgq5y5jlGX486b08KuL9A7ZAiRG90jKBcQ'
})