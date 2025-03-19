import { defineType, defineField } from "sanity";

export const heroSection = defineType({
    name: 'heroSection',
    type: 'object',
    title: 'Hero',
    fields: [
        { name: 'title', type: 'string', title: 'Titre' },
        { name: 'subTitle', type: 'string', title: 'Sous-titre' },
        { name: 'image', type: 'image', title: 'Image', options: { metadata: [] } },
        {
            name: 'layout',
            type: 'string',
            title: 'Disposition',
            options: {
                list: [
                    { title: 'Par défaut (Titre à gauche, image à droite)', value: 'default' },
                    { title: 'Alternatif (Title à droite, image à gauche)', value: 'mirrored' },
                ],
                layout: 'radio'
            },
        },
        defineField({
            name: 'bgColor',
            type: 'color',
            title: 'Couleur de fond',
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
    ],
    preview: {
        select: {
            title: 'title',
            media: 'backgroundImage',
        },
    },

})