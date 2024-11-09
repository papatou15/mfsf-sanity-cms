import { defineType, defineField } from "sanity";

export const card = defineType({
    name: 'card',
    type: 'object',
    title: 'Carte',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre/Contenu',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                metadata: []
            }
        }),
        defineField({
            name: 'layout',
            type: 'string',
            title: 'Layout',
            description: 'Choisir le type de carte',
            options: {
                list: [
                    { title: 'Grande carte', value: 'bigCard' },
                    { title: 'Petite carte', value: 'smallCard' },
                ],
                layout: 'radio',
            },
        }),
    ]
})