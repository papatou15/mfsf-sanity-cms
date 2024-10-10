import { defineType, defineField } from "sanity";

export const button = defineType({
    name: 'button',
    title: 'Bouton',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'url'
        })
    ]
})