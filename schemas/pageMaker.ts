import { defineField, defineType } from "sanity";

export const pageMaker = defineType({
    name: 'pageMaker',
    type: 'document',
    title: 'Page Maker',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre de la page'
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections de la page',
            of: [
                { type: 'heroSection' },
                { type: 'columnBlock' },
                { type: 'stackBlock' }
            ],
        },
    ],
})