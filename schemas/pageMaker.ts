import { defineField, defineType } from "sanity";

export const pageMaker = defineType({
    name: 'pageMaker',
    type: 'document',
    title: 'Pages',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre de la page'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Ne pas modifier',
            options: {
                source: 'title'
            }
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections de la page',
            of: [
                { type: 'heroSection' },
                { type: 'columnBlock' },
                { type: 'stackBlock' },
                { type: 'largeTitle' },
                { type: 'mediumTitle' },
                { type: 'smallTitle' },
                { type: 'stringText' },
                { type: 'textInput' },
                { type: 'card' },
                { type: 'button' },
                { type: 'carousel' },
                { type: 'textOnPicture' },
                { type: 'formButton' }
            ],
        },
    ],
})