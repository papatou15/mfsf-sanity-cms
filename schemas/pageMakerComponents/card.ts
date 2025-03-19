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
            type: 'text',
            hidden: ({ parent }) => parent?.layout !== 'bigCard'
        }),
        defineField({
            name: 'modalContent',
            title: 'Contenu',
            type: 'stackBlock',
            hidden: ({ parent }) => parent?.layout !== 'smallCard'
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
        defineField({
            name: 'color',
            type: 'color',
            title: 'Couleur de fond/bordure',
            options: {
                colorList: [
                    '#BBD143',
                    '#95AA26',
                    '#EA5045',
                    '#9F4E48',
                    '#F3943E',
                    '#CD9054',
                    "#00AEC3",
                    "#2C939F",
                    "#e5e5e5",
                    "#000000",
                    "#FFF8DD"
                ]
            }
        })
    ]
})